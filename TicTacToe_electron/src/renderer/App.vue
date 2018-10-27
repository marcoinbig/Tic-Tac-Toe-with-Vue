<template>
<div>
    <div class="title-bar mt-1">
        <div class="app-name-container">
          <span>Tic Tac Toe</span>
        </div>
        <div class="window-controls-container">
          <button 
            id="minimize-button"
            class="minimize-button btn-flat">
            <svg x="0px" y="0px" viewBox="-7 -7 20 13">
                <rect fill="#FFF" width="10" height="1"></rect>
            </svg>
          </button>
          <button 
            id="min-max-button"
            class="min-max-button btn-flat"
            disabled
            >
            <svg class="maximize-svg" x="0px" y="0px" viewBox="-7 -3 20 13">
                <mask id="Mask">
                    <rect fill="#FFFFFF" width="10" height="15"></rect>
                    <path fill="#000000" d="M 3 1 L 9 1 L 9 7 L 8 7 L 8 2 L 3 2 L 3 1 z"/>
                    <path fill="#000000" d="M 1 3 L 7 3 L 7 9 L 1 9 L 1 3 z"/>
                </mask>
                <path fill="#FFF" d="M 2 0 L 10 0 L 10 8 L 8 8 L 8 10 L 0 10 L 0 2 L 2 2 L 2 0 z" mask="url(#Mask)"/>
            </svg>
          </button>
          
          <button 
            id="close-button"
            class="close-button btn-flat">
            <svg x="0px" y="0px" viewBox="-7 -3 20 13">
                <polygon fill="#FFF" points="10,1 9,0 5,4 1,0 0,1 4,5 0,9 1,10 5,6 9,10 10,9 6,5"></polygon>
            </svg>
          </button>
        </div>
      </div>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}" style="margin-right: 10px">1vs1</router-link>
      <router-link :to="{name: 'bot'}" style="margin-right: 10px">1vsAI</router-link>
      <router-link :to="{name: 'online'}">Online Mode</router-link>
    </div>
    <router-view/>
  </div>
</div>
</template>
<script>
import { remote } from 'electron'
export default {
  mounted () {
      document.getElementById('minimize-button').addEventListener('click', (e) => {
        remote.getCurrentWindow().minimize();
    });
    document.getElementById('min-max-button').addEventListener('click', (e) => {
        
        let current = remote.getCurrentWindow();
        current.isMaximized() ? current.restore() : current.maximize()
    });
    document.getElementById('close-button').addEventListener('click', (e) => {
        remote.app.quit();
    });

  }
}
</script>

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
.title-bar {
  -webkit-app-region: drag;
  margin: 0;
  display: flex;
  background-color: grey;
  width: 100%;
  height: 30px;
}
.app-name-container  {
  text-align: center;
  padding-left: 10px;
  margin-top: 7px;
  color: white;
  font-weight: bold;
}
.window-controls-container {
  background-color: #2c3e50de;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}
button {
  -webkit-app-region: no-drag;
  
}
.btn-flat {
  position: relative;
  vertical-align: top;
  width: 40px;
  height: 30px;
  padding: 0 5px 0 0;
  color: white;
  text-align: center;
  background-color: grey;
  border: 0;
  cursor: pointer;
}
.btn-flat:hover {
  background-color: rgb(105, 105, 105);
}
.btn-flat:hover:nth-child(3) {
  background-color: rgb(236, 61, 61);
}
/*.window-controls-container > button {
  margin-right: 10px;
}*/

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
