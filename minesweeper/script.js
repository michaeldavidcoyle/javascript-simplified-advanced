// display

import { createBoard, markTile, TILE_STATUS, revealTile } from "./minesweeper.js";

const BOARD_SIZE = 8;
const MINE_COUNT = 7;

const board = createBoard(BOARD_SIZE, MINE_COUNT);
const boardElement = document.querySelector('.board');
const minesLeft = document.querySelector('[data-mine-count]');

board.forEach(row => {
    row.forEach(tile => {
        boardElement.appendChild(tile.element);

        if (tile.mine) {
            for (let y = tile.y - 1; y <= tile.y + 1; y++) {
                for (let x = tile.x - 1; x <= tile.x + 1; x++) {
                    let adjacent = board?.[x]?.[y];
                    if (adjacent !== undefined) {
                        adjacent.adjacentMineCount++;
                    }
                }
            }
        }

        tile.element.addEventListener('click', () => {
            revealTile(tile);
            if (!tile.mine && tile.adjacentMineCount > 0) {
                tile.element.innerText = tile.adjacentMineCount;
            }
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

// 2. Left click on tiles
    // a. reveal tiles

// 4. check for win/loss