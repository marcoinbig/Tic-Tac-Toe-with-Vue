<template>
    <div>
        <div class="mainBox">
          <div class="infoBox" :class="{draw: this.game.winner === 'Tie'}">
            {{infoText}}
          </div>
          <div class="gameBody">
            <div 
            v-for="(square, i) in this.game.squares" :key="i"
            :class="{highlited: square.isHighlited}"
            class="square"
            @click="game.makeMove(i)"
            
            >{{square.value}}</div>
            
          </div>
          <div><button class="btn" @click="restart()">RESTART</button></div>
        </div>

    </div>
</template>

<script>
import { Game } from "@/main/Game.js";
export default {
  mounted() {
    // console.log(this.game.makeMove(3));
    console.log(this.game);
  },
  data() {
    return {
      game: new Game()
    };
  },
  computed: {
    infoText() {
      if (this.game.inProgress) {
        return "Turn of the " + this.game.currentPlayer;
      } else if (this.game.winner) {
        return this.game.winner === "Tie"
          ? "There is a Draw"
          : "The winner is: " + this.game.winner;
      }
    }
  },
  methods: {
    restart() {
      this.game = new Game();
    }
  }
};
</script>

<style lang="scss">
$size_border: 5px;
// could be use a Boostrap framework for this.
// i think is useless for a project of this.
.btn {
  margin: 1em;
}
.mainBox {
  margin: 0 auto;
  border: 1px solid black;
  width: 500px;
  flex-wrap: wrap;
}

.infoBox {
  font-size: 14px;
  background-color: #eee;
  font-family: sans-serif;
  text-align: center;
  padding: 3%;
  font-weight: bold;
  text-transform: uppercase;
}
.draw {
  color: red;
}
.gameBody {
  padding: 25px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-content: center;
  align-items: center;
}
.square {
  width: 33.33%;
  height: 33.33%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  align-content: center;
  text-align: center;
  font-size: 75px;
  font-family: sans-serif;
  font-style: italic;
  cursor: pointer;
}

.square:hover {
  background-color: #eee;
}
.square:nth-child(3),
.square:nth-child(6) {
  border-bottom: $size_border solid orangered;
}
.square:nth-child(1),
.square:nth-child(2),
.square:nth-child(4),
.square:nth-child(5) {
  border-right: $size_border solid orangered;
  border-bottom: $size_border solid orangered;
}
.square:nth-child(7),
.square:nth-child(8) {
  border-right: $size_border solid orangered;
}

.highlited {
  color: green;
}
</style>
