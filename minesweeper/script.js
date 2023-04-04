// display

import { createBoard } from "./minesweeper.js";

const BOARD_SIZE = 4;
const MINE_COUNT = 4;

const board = createBoard(BOARD_SIZE, MINE_COUNT);
const boardElement = document.querySelector('.board');
boardElement.style.setProperty('--size', BOARD_SIZE);

board.forEach(row => {
    row.forEach(tile => {
        boardElement.appendChild(tile.element)
    });
});

// 1. Populate board w/ tiles and mines
// 2. Left click on tiles
    // a. reveal tiles
// 3. Right click on tiles
    // a. mark tiles
// 4. check for win/loss