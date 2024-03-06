const board = document.querySelector(".sketchboard");
const gridChoice = document.querySelector("#grid");
const gridbtn = document.getElementById("gridbtn");
const gridInput = document.querySelector(".gridinput");
const error = document.createElement('div');
const colorBtn = document.querySelector("#choose");
const eraserBtn = document.querySelector("#eraser");
let mousePressed = false,
    colorClicked = false,
    eraserClicked = false,
    buttonMode = "";


colorBtn.addEventListener("click", () => {
    eraserClicked = false;
    colorClicked = true;
    buttonMode = "color";
    console.log('colormode', buttonMode);
    updateButtonState();
});
eraserBtn.addEventListener("click", ()=> {
    colorClicked = false;
    eraserClicked = true;
    buttonMode = "eraser";
    console.log('erasermode');
    updateButtonState();
});

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
           //gridStatus(row);
        }
    }
    console.log(board);
    return board;
}

/*gridbtn.addEventListener('click', () => {
    error.classList.add('error');
    gridInput.appendChild(error);
    if (gridChoice.value >= 1 && gridChoice.value <= 100){
        makeGrid(gridChoice.value);
        gridChoice.value="";
        error.innerText="";
    }else{
        error.textContent="Please submit a value from 1 to 100";
    }
});*/

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
                row.setAttribute('style', 'background-color: black;')
            }
        }); 
    }); 
}

function gridStatus() {
    updateButtonState();
    gridbtn.addEventListener('click', () => {
        error.classList.add('error');
        gridInput.appendChild(error);
        if (gridChoice.value >= 1 && gridChoice.value <= 100){
            const newBoard = makeGrid(gridChoice.value);
            const rows = newBoard.querySelectorAll(".row");
            gridChoice.value="";
            error.innerText="";
            /*if (colorClicked){
                drawChooseColor(rows);
                console.log("ci siamo")
            }
            if (eraserClicked){
                eraser(rows);
                console.log("devi funzionareee")
        
            }*/
           /* switch(buttonMode){
                case "color":
                    drawChooseColor(rows);
                    console.log("ci siamo");
                    break;
                case "eraser":
                    eraser(rows);
                    console.log("devi funzionareee");
                    break;
            }*/
        }else{
            error.textContent="Please submit a value from 1 to 100";
        }
    });
}

/*function gridStatus(row) {
    switch(buttonMode){
        case "color":
            drawChooseColor(row);
            console.log("ci siamo");
            break;
        case "eraser":
            eraser(row);
            console.log("devi funzionareee");
            break;
    }
}*/
function updateButtonState() {
    /*if (colorClicked) {
        drawChooseColor(board.querySelectorAll('.row'));
    } else if (eraserClicked) {
        eraser(board.querySelectorAll('.row'));
    }*/
    switch(buttonMode){
        case "color":
            drawChooseColor(board.querySelectorAll('.row'));
            console.log("ci siamo");
            break;
        case "eraser":
            eraser(board.querySelectorAll('.row'));
            console.log("devi funzionareee");
            break;
    }
}
gridStatus();