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
          <transition name="fade"><div v-if="this.game.currentPlayer === 'O' && !this.game.winner">The BOT is thinking...</div></transition>
          <div><button class="btn" @click="restart()">RESTART</button></div>
        </div>
    </div>
</template>

<script>
import { Bot } from "@/main/Bot.js";
export default {
  mounted() {
    // console.log(this.game.makeMove(3));
  },
  data() {
    return {
      game: new Bot()
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
      this.game = new Bot();
    }
  }
};
</script>

<style>
</style>
