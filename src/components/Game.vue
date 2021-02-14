<template>
    <div>
        <div class="mainBox" >
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

<style>
</style>
