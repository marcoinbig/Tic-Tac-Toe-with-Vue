/**
 * @author Marco Ingrande <marcoingrande123@gmail.com>
 * @description www.github.com/marcoinbig
 * @author dcode
 * @description https://www.youtube.com/channel/UCjX0FtIZBBVD3YoCcxnDC4g
 */

/**
 * Importing Game class
 * and extend Bot class with it
 */
import {
    Game
} from "./Game.js";
/**
 * Export class Game
 * @constructor
 * 
 * default initialize: inProgress, squares, currentPlayer, counterMoves, winner
 *
 */
export class Bot extends Game {
    constructor() {
        super();
        if (this.currentPlayer === Game.O) this.botMove()
    }
    /**
     * @function botMove
     * @description check for columns, rows and crosses and then insert the 'O'
     * Added setTimeout for at least 2 seconds of late
     */
    botMove() {
        let time = Math.floor(Math.random() * 1000)
        setTimeout(() => {
            if (this.winner || this.counterMoves === 9) return;
            if (this.counterMoves === 0 && this.currentPlayer === Game.O) {
                const cell = Math.floor(Math.random() * 9);
                this.squares[cell].value = Game.O;
                this.counterMoves++;
                this.checkWinner();
                this.currentPlayer = Game.X;
                return;
            } else {
                for (let el of this.possibilities) {
                    let [a, b, c] = el;
                    if (this.checkMy(a, b, c)) {
                        for (let elem of el) {
                            if (!this.squares[elem].value) {
                                this.squares[elem].value = this.currentPlayer;
                                this.counterMoves++;
                                this.checkWinner();
                                this.currentPlayer = this.currentPlayer === Game.O ? Game.X : Game.O;
                                return
                            }
                        }
                    }
                }
                for (let el of this.possibilities) {
                    let [a, b, c] = el;
                    if (this.checkEnemy(a, b, c)) {
                        for (let elem of el) {
                            if (!this.squares[elem].value) {
                                this.squares[elem].value = this.currentPlayer;
                                this.counterMoves++;
                                this.checkWinner();
                                this.currentPlayer = this.currentPlayer === Game.O ? Game.X : Game.O;
                                return
                            }
                        }
                    }
                }
                if (this.checkIfFree(0)) {
                    this.squares[0].value = this.currentPlayer;
                } else if (this.checkIfFree(2)) {
                    this.squares[2].value = this.currentPlayer;
                } else if (this.checkIfFree(6)) {
                    this.squares[6].value = this.currentPlayer;
                } else if (this.checkIfFree(8)) {
                    this.squares[8].value = this.currentPlayer;
                } else {
                    if (!this.squares[1].value) {
                        this.squares[1].value = this.currentPlayer;
                    } else if (!this.squares[3].value) {
                        this.squares[3].value = this.currentPlayer;
                    } else if (!this.squares[4].value) {
                        this.squares[4].value = this.currentPlayer;
                    } else if (!this.squares[5].value) {
                        this.squares[5].value = this.currentPlayer;
                    } else if (!this.squares[7].value) {
                        this.squares[7].value = this.currentPlayer;
                    }
                }
                this.counterMoves++;
                this.checkWinner();
                this.currentPlayer = this.currentPlayer === Game.O ? Game.X : Game.O;
            }
        }, 1000 + time);
    }
    /**
     * @function checkEnemy
     * @param {Number} a 
     * @param {Number} b 
     * @param {Number} c 
     * @description return if there is in a tris of data passed at least 2 X
     */
    checkEnemy(a, b, c) {
        let first = [a, b, c];
        let min_count = 2;
        for (let el of first) {
            if (this.squares[el].value === Game.X) min_count--;
        }
        return min_count <= 0;
    }

    checkMy(a, b, c) {
        let first = [a, b, c];
        let min_count = 2;
        for (let el of first) {
            if (this.squares[el].value === Game.O) min_count--;
        }
        return min_count <= 0;
    }

    checkIfFree(value) {
        return this.squares[value].value === null;
    }

    makeMove(i) {
        if (this.winner) return;
        if (this.currentPlayer === Game.O) return;
        if (i >= 0 && i < this.squares.length && !this.squares[i].value) {
            this.squares[i].value = this.currentPlayer;
            this.counterMoves++;
            this.checkWinner();
            this.currentPlayer = this.currentPlayer === Game.O ? Game.X : Game.O;
            this.botMove();
        }
    }
}