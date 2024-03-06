const board = document.querySelector(".sketchboard");
const gridChoice = document.querySelector("#grid");
const gridbtn = document.getElementById("gridbtn");
const gridInput = document.querySelector(".gridinput");
const error = document.createElement('div');
const colorBtn = document.querySelector("#choose");
const eraserBtn = document.querySelector("#eraser");
let mousePressed = false;

document.addEventListener("mousedown", () => mousePressed = true);
document.addEventListener("mouseup", () => mousePressed = false);
document.addEventListener("drag", () => mousePressed = false);

function makeGrid(cells) {
    board.innerHTML='';
    for (let i=0; i<cells; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        board.appendChild(column);
        for(let j=0; j<cells; j++){
           const row = document.createElement('div');
           row.classList.add('row');
           column.appendChild(row);
           changeBackgroundColor(row);
           //row.addEventListener('mouseout', () => row.setAttribute('style', 'background-color: none;'))
        }
    }
}


gridbtn.addEventListener('click', (e) => {
    error.classList.add('error');
    gridInput.appendChild(error);
    if (gridChoice.value >= 1 && gridChoice.value <= 100){
        makeGrid(gridChoice.value);
        gridChoice.value="";
        error.innerText="";
    }else{
        error.textContent="Please submit a value from 1 to 100";
    }
});

function changeBackgroundColor(row) {
    row.addEventListener('mouseover', () => {
        if (mousePressed){
            row.setAttribute('style', 'background-color: black;');
        } 
    });
}

function eraser(row) {
    row.addEventListener('mouseover', () => {
        if (mousePressed){
            row.setAttribute('style', 'background-color: black;')
        }
    }) 
}