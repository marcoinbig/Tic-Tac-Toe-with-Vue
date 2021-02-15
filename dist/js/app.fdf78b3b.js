(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],h=0,v=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c74":function(e,t,n){},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticStyle:{"margin-right":"10px"},attrs:{to:{name:"home"}}},[e._v("1vs1")]),n("router-link",{staticStyle:{"margin-right":"10px"},attrs:{to:{name:"bot"}}},[e._v("1vsAI")]),n("router-link",{attrs:{to:{name:"online"}}},[e._v("Online Mode")])],1),n("router-view")],1)])},i=[],s=(n("5c0b"),n("2877")),o={},u=Object(s["a"])(o,a,i,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Game")],1)},v=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mainBox"},[n("div",{staticClass:"infoBox",class:{draw:"Tie"===this.game.winner}},[e._v("\n        "+e._s(e.infoText)+"\n      ")]),n("div",{staticClass:"gameBody"},e._l(this.game.squares,function(t,r){return n("div",{key:r,staticClass:"square",class:{highlited:t.isHighlited},on:{click:function(t){e.game.makeMove(r)}}},[e._v(e._s(t.value))])})),n("div",[n("button",{staticClass:"btn",on:{click:function(t){e.restart()}}},[e._v("RESTART")])])])])},m=[],d=n("9393"),y=(n("ac6a"),n("6c7b"),n("c665")),p=n("aa9a"),g=function e(){Object(y["a"])(this,e),this.value=null,this.isHighlited=!1},_=function(){function e(){Object(y["a"])(this,e),this.inProgress=!0,this.squares=new Array(9).fill().map(function(e){return new g}),this.currentPlayer=Math.floor(10*Math.random())%2?e.O:e.X,this.counterMoves=0,this.winner=null,this.possibilities=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]}return Object(p["a"])(e,[{key:"makeMove",value:function(t){this.winner||t>=0&&t<this.squares.length&&!this.squares[t].value&&(this.squares[t].value=this.currentPlayer,this.counterMoves++,this.checkWinner(),this.currentPlayer=this.currentPlayer===e.O?e.X:e.O)}},{key:"checkWinner",value:function(){var e=this;this.possibilities.forEach(function(t){var n=Object(d["a"])(t,3),r=n[0],a=n[1],i=n[2];e.squares[r].value&&e.squares[r].value===e.squares[a].value&&e.squares[r].value===e.squares[i].value&&(e.squares[r].isHighlited=e.squares[a].isHighlited=e.squares[i].isHighlited=!0,e.inProgress=!1)}),this.inProgress?this.counterMoves===this.squares.length&&(this.inProgress=!1,this.winner="Tie"):this.winner=this.currentPlayer}}]),e}();_.O="O",_.X="X";var b={mounted:function(){},data:function(){return{game:new _}},computed:{infoText:function(){return this.game.inProgress?"Turn of the "+this.game.currentPlayer:this.game.winner?"Tie"===this.game.winner?"There is a Draw":"The winner is: "+this.game.winner:void 0}},methods:{restart:function(){this.game=new _}}},k=b,w=(n("68e4"),Object(s["a"])(k,f,m,!1,null,null,null));w.options.__file="Game.vue";var O=w.exports,P={name:"home",components:{Game:O}},q=P,x=Object(s["a"])(q,h,v,!1,null,null,null);x.options.__file="Home.vue";var M=x.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("bot-game")],1)},j=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mainBox"},[n("div",{staticClass:"infoBox",class:{draw:"Tie"===this.game.winner}},[e._v("\n        "+e._s(e.infoText)+"\n      ")]),n("div",{staticClass:"gameBody"},e._l(this.game.squares,function(t,r){return n("div",{key:r,staticClass:"square",class:{highlited:t.isHighlited},on:{click:function(t){e.game.makeMove(r)}}},[e._v(e._s(t.value))])})),n("transition",{attrs:{name:"fade"}},["O"!==this.game.currentPlayer||this.game.winner?e._e():n("div",{staticStyle:{"margin-bottom":"10px","margin-top":"10px"}},[e._v("\n          I'm thinking...\n          ")])]),n("div",[n("button",{staticClass:"btn",on:{click:function(t){e.restart()}}},[e._v("RESTART")])])],1)])},C=[],$=(n("ac4d"),n("8a81"),n("dc0a")),E=n("d328"),B=n("11d9"),D=function(e){function t(){var e;return Object(y["a"])(this,t),e=Object(E["a"])(this,Object(B["a"])(t).call(this)),e.currentPlayer===_.O&&e.botMove(),e}return Object(p["a"])(t,[{key:"botMove",value:function(){var e=this,t=Math.floor(1e3*Math.random());setTimeout(function(){if(!e.winner&&9!==e.counterMoves){if(0===e.counterMoves&&e.currentPlayer===_.O){var t=Math.floor(9*Math.random());return e.squares[t].value=_.O,e.counterMoves++,e.checkWinner(),void(e.currentPlayer=_.X)}var n=!0,r=!1,a=void 0;try{for(var i,s=e.possibilities[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value,u=Object(d["a"])(o,3),c=u[0],l=u[1],h=u[2];if(e.checkMy(c,l,h)){var v=!0,f=!1,m=void 0;try{for(var y,p=o[Symbol.iterator]();!(v=(y=p.next()).done);v=!0){var g=y.value;if(!e.squares[g].value)return e.squares[g].value=e.currentPlayer,e.counterMoves++,e.checkWinner(),void(e.currentPlayer=e.currentPlayer===_.O?_.X:_.O)}}catch(e){f=!0,m=e}finally{try{v||null==p.return||p.return()}finally{if(f)throw m}}}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}var b=!0,k=!1,w=void 0;try{for(var O,P=e.possibilities[Symbol.iterator]();!(b=(O=P.next()).done);b=!0){var q=O.value,x=Object(d["a"])(q,3);c=x[0],l=x[1],h=x[2];if(e.checkEnemy(c,l,h)){var M=!0,T=!1,j=void 0;try{for(var S,C=q[Symbol.iterator]();!(M=(S=C.next()).done);M=!0){var $=S.value;if(!e.squares[$].value)return e.squares[$].value=e.currentPlayer,e.counterMoves++,e.checkWinner(),void(e.currentPlayer=e.currentPlayer===_.O?_.X:_.O)}}catch(e){T=!0,j=e}finally{try{M||null==C.return||C.return()}finally{if(T)throw j}}}}}catch(e){k=!0,w=e}finally{try{b||null==P.return||P.return()}finally{if(k)throw w}}e.checkIfFree(0)?e.squares[0].value=e.currentPlayer:e.checkIfFree(2)?e.squares[2].value=e.currentPlayer:e.checkIfFree(6)?e.squares[6].value=e.currentPlayer:e.checkIfFree(8)?e.squares[8].value=e.currentPlayer:e.squares[1].value?e.squares[3].value?e.squares[4].value?e.squares[5].value?e.squares[7].value||(e.squares[7].value=e.currentPlayer):e.squares[5].value=e.currentPlayer:e.squares[4].value=e.currentPlayer:e.squares[3].value=e.currentPlayer:e.squares[1].value=e.currentPlayer,e.counterMoves++,e.checkWinner(),e.currentPlayer=e.currentPlayer===_.O?_.X:_.O}},1e3+t)}},{key:"checkEnemy",value:function(e,t,n){for(var r=[e,t,n],a=2,i=0;i<r.length;i++){var s=r[i];this.squares[s].value===_.X&&a--}return a<=0}},{key:"checkMy",value:function(e,t,n){for(var r=[e,t,n],a=2,i=0;i<r.length;i++){var s=r[i];this.squares[s].value===_.O&&a--}return a<=0}},{key:"checkIfFree",value:function(e){return null===this.squares[e].value}},{key:"makeMove",value:function(e){this.winner||this.currentPlayer!==_.O&&e>=0&&e<this.squares.length&&!this.squares[e].value&&(this.squares[e].value=this.currentPlayer,this.counterMoves++,this.checkWinner(),this.currentPlayer=this.currentPlayer===_.O?_.X:_.O,this.botMove())}}]),Object($["a"])(t,e),t}(_),I={mounted:function(){},data:function(){return{game:new D}},computed:{infoText:function(){return this.game.inProgress?"Turn of the "+this.game.currentPlayer:this.game.winner?"Tie"===this.game.winner?"There is a Draw":"The winner is: "+this.game.winner:void 0}},methods:{restart:function(){this.game=new D}}},A=I,X=(n("e8a1"),Object(s["a"])(A,S,C,!1,null,null,null));X.options.__file="BotGame.vue";var H=X.exports,W={name:"bots",components:{BotGame:H}},F=W,G=Object(s["a"])(F,T,j,!1,null,null,null);G.options.__file="Bot.vue";var R=G.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("online")],1)},z=[],J=n("0a12"),L=n.n(J),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v(" Players online: "+e._s(e.nPlayers))]),n("div",[e._v(" Spectators: "+e._s(e.spectators))]),n("div",{staticClass:"mainBox"},[n("div",{staticClass:"infoBox",class:{draw:null!==this.game&&"Tie"===this.game.winner}},[e._v("\n        "+e._s(e.infoText)+"\n      ")]),null!==this.game?n("div",{staticClass:"gameBody"},e._l(this.game.squares,function(t,r){return n("div",{key:r,staticClass:"square",class:{highlited:t.isHighlited},on:{click:function(t){e.sendData(r)}}},[e._v(e._s(t.value))])})):e._e(),n("div",[n("button",{staticClass:"btn",on:{click:function(t){e.restart()}}},[e._v("NEW MATCH")])])]),e._m(0),n("div",{staticClass:"spectatorBox"},e._l(this.rooms,function(t){return n("div",{key:t},[e.game&&t===e.game.roomID?e._e():n("label",{on:{click:function(n){e.spectate(t)}}},[e._v("Stanza N° "+e._s(t))])])}))])},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Lista stanze")])])}],Q={data:function(){return{game:null,rooms:[],iAm:"O",nPlayers:0,spectators:0,isSpectator:!1}},beforeDestroy:function(){this.$socket.disconnect()},computed:{infoText:function(){return null===this.game?"":this.isSpectator?this.game.currentPlayer+"'s Turn":this.game.inProgress?this.iAm===this.game.currentPlayer?"My Turn":"Enemy turn":this.game.hasOwnProperty("winner")&&this.game.winner?"Tie"===this.game.winner?"There is a Draw":"The winner is: "+this.game.winner:void 0}},sockets:{connect:function(){console.log("socket connected"),this.$socket.emit("newUser")},getData:function(e){this.game=e,this.$forceUpdate()},getWhoIAm:function(e){this.iAm=e},disconnect:function(){console.log("socket disconnected")},numberOfPlayers:function(e){this.nPlayers=e},forceReset:function(){alert("Enemy left the room."),this.restart()},newMatch:function(){this.$socket.emit("newUser")},roomList:function(e){console.log(e),this.rooms=e,this.$forceUpdate()},getSpectateData:function(e){this.isSpectator=!0,this.game=e},numberOfSpec:function(e){this.spectators=e}},methods:{sendData:function(e){this.isSpectator||this.iAm===this.game.currentPlayer&&this.$socket.emit("makeMove",{roomID:this.game.roomID,i:e})},restart:function(){this.isSpectator||(this.$socket.emit("restart",this.game.roomID),this.game=null)},spectate:function(e){this.isSpectator=!0,this.$socket.emit("spectate",e)}}},V=Q,Y=(n("8a8e"),Object(s["a"])(V,N,K,!1,null,null,null));Y.options.__file="Online.vue";var Z=Y.exports,ee={name:"onlines",components:{Online:Z},created:function(){r["a"].use(L.a,"https://tictactoe-serverdesk.herokuapp.com/"),this.$socket.connect()}},te=ee,ne=Object(s["a"])(te,U,z,!1,null,null,null);ne.options.__file="Online.vue";var re=ne.exports;r["a"].use(l["a"]);var ae=new l["a"]({routes:[{path:"/",name:"home",component:M},{path:"/bot",name:"bot",component:R},{path:"/online",name:"online",component:re}]}),ie=n("2f62");r["a"].use(ie["a"]);var se=new ie["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:ae,store:se,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"68e4":function(e,t,n){"use strict";var r=n("0c74"),a=n.n(r);a.a},"8a8e":function(e,t,n){"use strict";var r=n("f9af"),a=n.n(r);a.a},a185:function(e,t,n){},e8a1:function(e,t,n){"use strict";var r=n("a185"),a=n.n(r);a.a},f9af:function(e,t,n){}});
//# sourceMappingURL=app.fdf78b3b.js.map