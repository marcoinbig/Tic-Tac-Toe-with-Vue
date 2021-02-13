
const argv = require('process.argv')(process.argv.slice(2));
let config = {};

config = argv(config);

/**
 * Application main entry point
 */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const http = require('http');
const app = express();
const fs = require('fs')
const bodyparser = require('body-parser')
const port = config.port || process.env.PORT || "8000";
const host = config.host || process.env.HOST || "0.0.0.0";
const path = require('path')
const random = require('randomstring')
console.log(host, port);
//Helmet middleware
app.use(helmet())
//Enable cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true')
    next();
});

var server = http.createServer(app)
//Use cors for all options
app.options('*', cors());

//Use bodyparser
app.use(bodyparser.json());

var io = require('socket.io')(server)
io.origins('*:*');

//Not found response
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error_type: "Not Found",
        message: "It seems you've lost yourself. Nothing has been found here."
    });
    return next();
});

server.listen(port, host, 511, () => {
    console.log("\x1b[36mServer is listening at \x1b[32m%s\x1b[0m \x1b[36mon port \x1b[32m%d\x1b[0m", host, port);
})

var players = []
var rooms = new Map()
var getRoomList = () => new Promise((res, req) => {
  let roomList = []
  for (let ID of rooms.keys()) {
    
    roomList.push(ID)
  }
  console.log(roomList)
  res(roomList)
})
const Game = require('./Game.js')
io.on('connection', function(socket){
    console.log('\x1b[33m' +socket.id + '\x1b[0m connected')
    players.unshift(socket.id)
    fs.writeFileSync('./players.txt', players)
    io.emit('numberOfPlayers', players.length)
    getRoomList().then(roomList => {
      io.emit('roomList', roomList)
    }).catch(console.error)
    

    socket.on('newUser', function () {
        let inset = false
        const ROOMID = random.generate({charset: 'numeric', length: 8})
        if (rooms.size < 1){
          rooms.set(ROOMID, {player1: socket.id, player2: null, game: null, spectators: []})
          io.to(socket.id).emit('getWhoIAm', 'O')
          io.to(socket.id).emit('getRoomID', ROOMID)
          let el = rooms.values();
          for(let i = 0; i < rooms.size; i++) {
            fs.writeFileSync('./rooms.txt', JSON.stringify(el.next().value))
        }
        } else {
        for (let [key, room] of rooms) {
            if (room.player2 === null) {
              room.player2 = socket.id
              room.game = new Game(key)
              inset = true
              io.to(socket.id).emit('getWhoIAm', 'X')
              io.to(room.player2).emit('getData', room.game)
              io.to(room.player1).emit('getData', room.game)
              getRoomList().then(roomList => {
                io.emit('roomList', roomList)
              }).catch(console.error)
              for(let spec of room.spectators) {
                io.to(spec).emit('numberOfSpec', room.spectators.length)
              }
              io.to(room.player1).emit('numberOfSpec', room.spectators.length)
              io.to(room.player2).emit('numberOfSpec', room.spectators.length)
              let el = rooms.values();
              for(let i = 0; i < rooms.size; i++) {
                fs.writeFileSync('./rooms.txt', JSON.stringify(el.next().value))
            }
            }
          }
          if (!inset) {
            rooms.set(ROOMID, {id: ROOMID, player1: socket.id, player2: null})
            let el = rooms.values();
            for(let i = 0; i < rooms.size; i++) {
                fs.writeFileSync('./rooms.txt', JSON.stringify(el.next().value))
            }
          }
        }
        })
    
    socket.on('makeMove', function (data) {
      rooms.get(data.roomID).game.makeMove(data.i)
      io.to(rooms.get(data.roomID).player1).emit('getData', rooms.get(data.roomID).game)
      io.to(rooms.get(data.roomID).player2).emit('getData', rooms.get(data.roomID).game)
      for(let spec of rooms.get(data.roomID).spectators) {
        io.to(spec).emit('getData', rooms.get(data.roomID).game)
      }
    })
    socket.on('restart', function (roomID = null) {
        let room = rooms.get(roomID)
        if(room) {
            if (room.player1 === socket.id) {
                io.to(room.player2).emit('forceReset')
            } else {
                io.to(room.player1).emit('forceReset')
            }
            rooms.delete(roomID)
        }
        io.to(socket.id).emit('newMatch')
    })
    socket.on('disconnect', function(){
        const id = players.indexOf(socket.id)
        if (id >= 0) players.splice(id, 1)
        for (let [key,] of rooms) {
          if(rooms.get(key).player1 === socket.id) {
              if(rooms.get(key).player2 !== null){
                io.to(rooms.get(key).player2).emit('newMatch')
              }
              rooms.delete(key)
          } else if(rooms.get(key).player2 === socket.id){
            rooms.get(key).player2 = null
          } else if(rooms.get(key).spectators.includes(socket.id)){
            rooms.get(key).spectators.splice(rooms.get(key).spectators.indexOf(socket.id), 1)
            for(let spec of rooms.get(key).spectators) {
              io.to(spec).emit('numberOfSpec', rooms.get(key).spectators.length)
            }
          }
        }
        io.emit('numberOfPlayers', players.length)
        console.log('\x1b[31m' + socket.id + '\x1b[0m disconnected')
    })
    socket.on('spectate', function(roomID) {
      let room = rooms.get(roomID)
      room.spectators.push(socket.id)
      rooms.set(roomID, room)
      io.to(socket.id).emit('getSpectateData', room.game)
      for(let spec of room.spectators) {
        io.to(spec).emit('numberOfSpec', room.spectators.length)
      }
      io.to(room.player1).emit('numberOfSpec', room.spectators.length)
      io.to(room.player2).emit('numberOfSpec', room.spectators.length)
    })
    socket.on('disconnectSpec', function(roomID) {
      let room = rooms.get(roomID)
      room.spectators.splice(socket.id, 1)
      rooms.set(roomID, room)
      for(let spec of room.spectators) {
        io.to(spec).emit('numberOfSpec', room.spectators.length)
      }
    })
})

