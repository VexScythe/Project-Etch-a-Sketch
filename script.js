const board = document.querySelector(".sketchboard");

function makeGrid() {
    for (let i=0; i<16; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.textContent = `${i}`;
        board.appendChild(column);
        for(let j=0; j<16; j++){
           
        }
    }
}

makeGrid();

/*
            const div = document.createElement('div');
            div.textContent = `${i}`;
            div.setAttribute('style', 'display: flex; flex: 1; flex-direction: column;')
            board.appendChild(div);

*/