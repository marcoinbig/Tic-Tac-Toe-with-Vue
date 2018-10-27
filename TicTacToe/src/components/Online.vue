<template>
        <div>
        <div> Players online: {{ nPlayers }}</div>
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

    </div>
</template>

<script>
export default {
  data () {
    return {
      game: null,
      iAm: 'O',
      nPlayers: 0
    }
  },
  beforeDestroy () {
    this.$socket.disconnect()
  },
  computed: {
    infoText() {
      if (this.game !== null) {
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
    }
  },
  methods: {
    sendData(i) {
      if (this.iAm !== this.game.currentPlayer) return
      this.$socket.emit('makeMove', {roomID: this.game.roomID, i: i})
    },
    restart () {
      this.$socket.emit('restart', this.game.roomID)
      this.game = null
    }
  }
}
</script>

<style>

</style>
