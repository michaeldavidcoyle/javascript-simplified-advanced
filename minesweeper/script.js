// display

import { createBoard } from "./minesweeper.js";

const BOARD_SIZE = 8;
const MINE_COUNT = 4;

const board = createBoard(BOARD_SIZE, MINE_COUNT);
const boardElement = document.querySelector('.board');
const minesLeft = document.querySelector('[data-mine-count]');

board.forEach(row => {
    row.forEach(tile => {
        boardElement.appendChild(tile.element)
    });
});

boardElement.style.setProperty('--size', BOARD_SIZE);
minesLeft.innerText = MINE_COUNT;

// 1. Populate board w/ tiles and mines
// 2. Left click on tiles
    // a. reveal tiles
// 3. Right click on tiles
    // a. mark tiles
// 4. check for win/loss