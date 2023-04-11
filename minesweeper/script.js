// display

import {
    createBoard,
    markTile,
    TILE_STATUS,
    revealTile,
    checkWin,
    checkLose
} from "./minesweeper.js";

const BOARD_SIZE = 8;
const MINE_COUNT = 3;

const board = createBoard(BOARD_SIZE, MINE_COUNT);
const boardElement = document.querySelector('.board');
const minesLeft = document.querySelector('[data-mine-count]');
const message = document.querySelector('.subtext');

board.forEach(row => {
    row.forEach(tile => {
        boardElement.appendChild(tile.element);

        tile.element.addEventListener('click', () => {
            revealTile(board, tile);
            checkGameEnd();
        });
        tile.element.addEventListener('contextmenu', event => {
            event.preventDefault();
            markTile(tile);
            updateMinesLeft();
        });
    });
});

boardElement.style.setProperty('--size', BOARD_SIZE);
minesLeft.innerText = MINE_COUNT;

function updateMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUS.MARKED).length;
    }, 0);

    minesLeft.innerText = MINE_COUNT - markedTilesCount;
}

function checkGameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);

    if (win || lose) {
        boardElement.addEventListener('click', stopProp, {capture: true});
        boardElement.addEventListener('contextmenu', stopProp, {capture: true});
    }

    if (win) {
        message.innerText = 'You win!';
    }

    if (lose) {
        message.innerText = 'Sorry, you lose.'
    }
}

function stopProp(event) {
    event.stopImmediatePropagation();
}