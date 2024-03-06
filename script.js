const board = document.querySelector(".sketchboard");
const gridChoice = document.querySelector("#grid");
const gridbtn = document.getElementById("gridbtn");
const gridInput = document.querySelector(".gridinput");
const error = document.createElement('div');
const colorBtn = document.querySelector("#choose");
const eraserBtn = document.querySelector("#eraser");
const randomBtn = document.querySelector("#random");
let mousePressed = false,
    buttonMode = "";

colorBtn.addEventListener("click", () => {
    buttonMode = "color";
    console.log('colormode');
    updateButtonState();
});
eraserBtn.addEventListener("click", ()=> {
    buttonMode = "eraser";
    console.log('erasermode');
    updateButtonState();
});
randomBtn.addEventListener("click", ()=> {
    buttonMode = "random";
    console.log('randommode');
    updateButtonState();
});



document.addEventListener("mousedown", () => mousePressed = true);
document.addEventListener("mouseup", () => mousePressed = false);
document.addEventListener("drag", (e) => mousePressed = false);

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
        }
    }
    console.log(board);
    return board;
}

function drawChooseColor(row) {
    row.forEach(row => {
        row.addEventListener('mouseover', () => {
            if (mousePressed){
                row.setAttribute('style', 'background-color: black;');
            }
        });
    });
}

function eraser(row) {
    row.forEach((row) => {
        row.addEventListener('mouseover', () => {
            if (mousePressed){
                row.setAttribute('style', 'background-color: white;');
            }
        }); 
    }); 
}

function randomColor(row) {
    row.forEach((row) => {
        let r = Math.floor(Math.random() * 251);
        let g = Math.floor(Math.random() * 251);
        let b = Math.floor(Math.random() * 251);
        row.addEventListener('mouseover', () => {
            if (mousePressed){
                row.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b});`);
            }
        }); 
    })
}

function gridStatus() {
    updateButtonState();
    gridbtn.addEventListener('click', () => {
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
}

function updateButtonState() {
    //colorBtn.classList.toggle("active", colorClicked); When i want to style it
    //eraserBtn.classList.toggle("active", eraserClicked);
    switch(buttonMode){
        case "color":
            drawChooseColor(board.querySelectorAll('.row'));
            break;
        case "eraser":
            eraser(board.querySelectorAll('.row'));
            break;
        case "random":
            randomColor(board.querySelectorAll('.row'));
    }
}

gridStatus();