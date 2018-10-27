/**
 * @author Marco Ingrande <marcoingrande123@gmail.com>
 * @description www.github.com/marcoinbig
 * @author dcode
 * @description https://www.youtube.com/channel/UCjX0FtIZBBVD3YoCcxnDC4g
 */

/**
 * Importing Square class
 */
let Square = require('./Square.js')
/**
 * Export class Game
 * @constructor 
 * default initialize: inProgress, squares, currentPlayer, counterMoves, winner
 */
class Game {
    constructor(key) {
        this.inProgress = true;
        this.roomID = key;
        this.squares = new Array(9).fill().map(el => el = new Square());
        this.currentPlayer = Math.floor(Math.random() * 10) % 2 ? Game.O : Game.X;
        this.counterMoves = 0;
        this.winner = null;
        this.possibilities = [
            [0, 1, 2],
            [3, 4, 5], // horizontal
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7], // vertical
            [2, 5, 8],

            [0, 4, 8], // cross
            [2, 4, 6]
        ]
    }
    /**
     * @function makeMove
     * @param {number} i - index of squares array. 
     */

    makeMove(i) {
        if (this.winner) return
        if ((i >= 0 && i < this.squares.length) && !this.squares[i].value) {
            this.squares[i].value = this.currentPlayer
            this.counterMoves++;
            this.checkWinner();
            this.currentPlayer = this.currentPlayer === Game.O ? Game.X : Game.O
        }
    }
    /**
     * @function checkWinner
     * @description check for horizontal/vertical/cross and then check if the player who play last wins or get a draw.
     */
    checkWinner() {


        this.possibilities.forEach(el => {
            let [a, b, c] = el
            if (this.squares[a].value &&
                this.squares[a].value === this.squares[b].value &&
                this.squares[a].value === this.squares[c].value) {
                this.squares[a].isHighlited = this.squares[b].isHighlited = this.squares[c].isHighlited = true
                this.inProgress = false
            }
        })

        if (!this.inProgress) {
            this.winner = this.currentPlayer
        } else if (this.counterMoves === this.squares.length) {
            this.inProgress = false
            this.winner = 'Tie'
        }
    }
}

/**
 * @constant
 * @type {string}
 * @default
 */

Game.O = 'O';
/**
 * @constant
 * @type {string}
 * @default
 */
Game.X = 'X';

module.exports = Game;