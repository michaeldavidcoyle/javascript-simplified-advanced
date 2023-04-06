// logic

export const TILE_STATUS = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
}

export function createBoard(boardSize, mineCount) {
    const board = [];
    const minePositions = positionMines(boardSize, mineCount);

    for (let x = 0; x < boardSize; x++) {
        const row = [];
        for (let y = 0; y < boardSize; y++) {
            const element = document.createElement('div');
            element.dataset.status = TILE_STATUS.HIDDEN;
            const tile = {
                element,
                x,
                y,
                adjacentMineCount: 0,
                mine: minePositions.some(p => positionMatch(p, {x, y})),
                get status() {
                    return this.element.dataset.status;
                },
                set status(status) {
                    this.element.dataset.status = status;
                }
            }
            row.push(tile);
        }
        board.push(row);
    }

    return board;
}

export function markTile(tile) {
    if (
        tile.status !== TILE_STATUS.HIDDEN &&
        tile.status !== TILE_STATUS.MARKED
    ) {
        return;
    }

    if (tile.status === TILE_STATUS.MARKED) {
        tile.status = TILE_STATUS.HIDDEN;
    } else {
        tile.status = TILE_STATUS.MARKED;
    }
}

export function revealTile(tile) {
    if (tile.status !== TILE_STATUS.HIDDEN) return;
    if (tile.mine) {
        tile.status = TILE_STATUS.MINE;
        // lose();
        return;
    }

    tile.status = TILE_STATUS.NUMBER;
}

function positionMines(boardSize, mineCount) {
    const positions = [];

    while (positions.length < mineCount) {
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        }

        if (!positions.some(p => positionMatch(p, position))) {
            positions.push(position);
        }
    }
    return positions;
}

function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y;
}

function randomNumber(size) {
    return Math.floor(Math.random() * size);
}