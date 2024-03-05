const board = document.querySelector(".sketchboard");

function makeGrid() {
    for (let i=0; i<16; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        board.appendChild(column);
        for(let j=0; j<16; j++){
           const row = document.createElement('div');
           row.classList.add('row');
           row.textContent = `${j}`;
           column.appendChild(row);
        }
    }
}

makeGrid();