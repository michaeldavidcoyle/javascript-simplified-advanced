// display

import {
    createBoard,
    markTile,
    TILE_STATUS,
    revealTile,
    checkWin,
    checkLose
} from "./minesweeper.js";

const BOARD_SIZE = 10;
const MINE_COUNT = 16;

const board = createBoard(BOARD_SIZE, MINE_COUNT);
const boardElement = document.querySelector('.board');
const minesLeft = document.querySelector('[data-mine-count]');
const outputElement = document.querySelector('.subtext');
const FLAG = '&#x1F6A9;';
const BOMB = '&#x1F4A3;'

board.forEach(row => {
    row.forEach(tile => {
        boardElement.appendChild(tile.element);

        tile.element.addEventListener('click', () => {
            revealTile(board, tile);
            if (tile.status === TILE_STATUS.MINE) {
                tile.element.innerHTML = BOMB;
            }
            checkGameEnd();
        });
        tile.element.addEventListener('contextmenu', event => {
            event.preventDefault();
            markTile(tile);
            if (tile.status === TILE_STATUS.MARKED) {
                tile.element.innerHTML = FLAG;
            } else {
                tile.element.innerHTML = '';
            }
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
        outputElement.innerText = 'You win!';
    }

    if (lose) {
        outputElement.innerText = 'Sorry, you lose.';
        board.forEach(row => {
            row.forEach(tile => {
                if (tile.status === TILE_STATUS.MARKED) markTile(tile);
                if (tile.mine) {
                    revealTile(board, tile);
                    tile.element.innerHTML = BOMB;
                }
            })
        });
    }
}

function stopProp(event) {
    event.stopImmediatePropagation();
}