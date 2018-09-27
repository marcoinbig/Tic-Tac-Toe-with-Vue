<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}" style="margin-right: 10px">1vs1</router-link>
    <router-link :to="{name: 'bot'}">1vsAI</router-link></div>
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: rgba(39, 170, 225, 0.9);
    }
  }
}
$size_border: 5px;
$border_color: rgba(39, 170, 225, 0.9);
// could be use a Boostrap framework for this.
// i think is useless for a project of this.
.btn {
  position: relative;
  vertical-align: top;
  width: 100%;
  height: 60px;
  padding: 0;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #27aae1;
  border: 0;
  border-bottom: 2px solid #27aae1;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #27aae1;
  box-shadow: inset 0 -2px #27aae1;
}
.btn:hover {
  background-color: #259bce;
}
.btn:active {
  top: 1px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.mainBox {
  margin: 0 auto;
  border: 1px solid black;
  width: 95%;
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
  height: 560px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-content: center;
  align-items: center;
}
.square {
  width: 33.33%;
  height: 33.33%;
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
  border-bottom: $size_border solid $border_color;
}
.square:nth-child(1),
.square:nth-child(2),
.square:nth-child(4),
.square:nth-child(5) {
  border-right: $size_border solid $border_color;
  border-bottom: $size_border solid $border_color;
}
.square:nth-child(7),
.square:nth-child(8) {
  border-right: $size_border solid $border_color;
}

.highlited {
  color: green;
}
</style>
