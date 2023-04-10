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

export function revealTile(board, tile) {
    if (tile.status !== TILE_STATUS.HIDDEN) return;
    if (tile.mine) {
        tile.status = TILE_STATUS.MINE;
        return;
    }

    tile.status = TILE_STATUS.NUMBER;

    const adjacentTiles = nearbyTiles(board, tile);
    const mines = adjacentTiles.filter(t => t.mine);

    if (mines.length) {
        tile.element.innerText = mines.length;
    } else {
        adjacentTiles.forEach(tile => revealTile(board, tile));
        // adjacentTiles.forEach(revealTile.bind(null, board));
    }
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

function nearbyTiles(board, {x, y}) {
    const tiles = [];
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile = board?.[x + xOffset]?.[y + yOffset];
            if (tile) tiles.push(tile);
        }
    }
    return tiles;
}