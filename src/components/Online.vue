<template>
        <div>
        <div> Players online: {{ nPlayers }}</div>
        <div> Spectators: {{spectators}}</div>
        <div class="mainBox" >
          <div class="infoBox" :class="{draw: this.game === null ? false : this.game.winner === 'Tie'}">
            {{infoText}}
          </div>
          <div class="gameBody" v-if="this.game !== null">
            <div 
            v-for="(square, i) in this.game.squares" :key="i"
            :class="{highlited: square.isHighlited}"
            class="square"
            @click="sendData(i)"
            >{{square.value}}</div>
            
          </div>
          <div><button class="btn" @click="restart()">NEW MATCH</button></div>
        </div>
        <div><h3>Lista stanze</h3></div>
        <div class="spectatorBox">
          
          <div v-for="room of this.rooms" :key="room" >
            <label @click="spectate(room)" v-if="game ? room !== game.roomID : true">Stanza N° {{room}}</label>
          </div>
          
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      game: null,
      rooms: [],
      iAm: 'O',
      nPlayers: 0,
      spectators: 0,
      isSpectator: false
    }
  },
  beforeDestroy () {
    this.$socket.disconnect()
  },
  computed: {
    infoText() {
      
      if (this.game !== null) {
        if(this.isSpectator) return this.game.currentPlayer + '\'s Turn'
        if (this.game.inProgress) {
            return this.iAm === this.game.currentPlayer ? 'My Turn' : 'Enemy turn';
        } else if (this.game.hasOwnProperty('winner') && this.game.winner) {
            return this.game.winner === "Tie"
            ? "There is a Draw"
            : "The winner is: " + this.game.winner;
        }
      } else {
          return ''
      }
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
      this.$socket.emit('newUser')
    },
    getData: function (game) {
        this.game = game
        this.$forceUpdate()
    },
    getWhoIAm: function (iAm) {
      this.iAm = iAm
    },
    disconnect: function () {
      console.log('socket disconnected')
    },
    numberOfPlayers: function (n) {
      this.nPlayers = n
    },
    forceReset: function () {
      alert('Enemy left the room.')
      this.restart()
    },
    newMatch: function () {
      this.$socket.emit('newUser')
    },
    roomList: function(roomList) {
      console.log(roomList)
      this.rooms = roomList
      this.$forceUpdate()
    },
    getSpectateData: function(game) {
      this.isSpectator = true
      this.game = game
    },
    numberOfSpec: function(nOfSpec) {
      this.spectators = nOfSpec
    }
  },
  methods: {
    sendData(i) {
      if (this.isSpectator) return
      if (this.iAm !== this.game.currentPlayer) return
      this.$socket.emit('makeMove', {roomID: this.game.roomID, i: i})
    },
    restart () {
      if (this.isSpectator) return
      this.$socket.emit('restart', this.game.roomID)
      this.game = null
    },
    spectate(roomID) {
      this.isSpectator = true
      this.$socket.emit('spectate', roomID)
    }
  }
}
</script>

<style>
.spectatorBox {
  margin: auto;
  width: 50%;
  border: 1px solid #000;
  padding: 5px;
}

.spectatorBox > div > label {
  cursor: pointer;
  color: #27aae1;
  
}

.spectatorBox > div > label:hover {
  color: #6fccf2;

}

</style>
