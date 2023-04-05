// logic

const TILE_STATUS = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
}

export function createBoard(boardSize, mineCount) {
    const board = [];
    for (let x = 0; x < boardSize; x++) {
        const row = [];
        for (let y = 0; y < boardSize; y++) {
            const element = document.createElement('div');
            element.dataset.status = TILE_STATUS.hidden;
            const tile = {
                element,
                x,
                y,
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