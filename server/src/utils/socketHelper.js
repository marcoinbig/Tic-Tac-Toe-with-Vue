const {log} = require('./logHelper')

const {
    sockets,
    users
    } = require('../models')

const SocketHelper = module.exports = {}
SocketHelper.setID = async (id, socketID) => {
    try {
        if(! await SocketHelper.checkID(id)){
            await sockets.create({
                codUser: id,
                socketID: socketID,
                online: true
            })
            return true
        }else {
            return false
        }
    } catch (ex) {
        return false
    }
}
SocketHelper.checkID = async (id) => {
    try {
        const existInUsers = await users.findOne({
            where: {
                id: id
            }
        })
        const existInSockets = await sockets.findOne({
            where: {
                codUser: id
            }
        })
        //log('exist user: ' + existInUsers !== null && existInSockets !== null)
        return (existInUsers !== null && existInSockets !== null ? true : false)
    } catch (ex) {
        log(ex)
    }
};
SocketHelper.updateSocket = async (id, socketID) => {
    try {
        if(await SocketHelper.checkID(id)){
            await sockets.update({
                socketID: socketID,
                online: true
            }, {
                where: {
                    codUser: id
                }
            })
        }
    } catch (ex) {
        console.log(ex)
    }
};
SocketHelper.getSocketID = async(id) => {
    try {
        if(await SocketHelper.checkID(id)){
            const socket = await sockets.findOne({
                where: {
                    codUser: id
                },
                attributes: ['socketID']
            })
            return socket.socketID
        }else {
            return false
        }
    } catch (ex) {
        console.log(ex)
    }
};
SocketHelper.goOffline = async (socketID) => {
    try{
        const existSocket = await sockets.findOne({
            where: {
                socketID: socketID,
                online: true
            }
        })
        if(existSocket !== null){
            await sockets.update({
                online: false
            }, {
                where: {
                    socketID: socketID
                }
            })
            log('status aggiornato')
            return true
        } else {
            return false
        }
    } catch(ex){
        log(SocketID + ' not found in DB')
        return false
    }
}
