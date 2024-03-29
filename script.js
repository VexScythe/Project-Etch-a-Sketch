const board = document.querySelector(".sketchboard");
const gridChoice = document.querySelector("#grid");
const gridbtn = document.getElementById("gridbtn");
const gridInput = document.querySelector(".gridinput");
const error = document.createElement('div');
const colorBtn = document.querySelector("#choose");
const colorPicker = document.querySelector("#colorPicker");
const eraserBtn = document.querySelector("#eraser");
const randomBtn = document.querySelector("#random");
const shadeBtn = document.querySelector("#shade");
const gridBtn = document.querySelector("#showgrid");
const clearBtn = document.querySelector("#blank");
const buttons = document.querySelectorAll('.toactive');

let mousePressed = false,
    gridToggled = false,
    buttonMode = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
         buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

colorBtn.addEventListener("click", () => {
    buttonMode = "color";
    console.log('colormode');
    colorPicker.click();
    updateButtonState();
});

eraserBtn.addEventListener("click", () => {
    buttonMode = "eraser";
    console.log('erasermode');
    updateButtonState();
});

randomBtn.addEventListener("click", () => {
    buttonMode = "random";
    console.log('randommode');
    updateButtonState();
});

shadeBtn.addEventListener("click", () => {
    buttonMode = "shade";
    console.log('shademode');
    updateButtonState();
});

gridBtn.addEventListener("click", () => {
    gridToggled = gridToggled ? false : true;
    gridToggled ? gridBtn.classList.add('active') : gridBtn.classList.remove('active');
    console.log(gridToggled);
    buttonMode = "togglegrid";
    console.log('togglegrid');
    updateButtonState();
});

clearBtn.addEventListener("click", () => {
    const confirmed = confirm("This is going to clear all the Sketch Board. Are you sure?");
    if (confirmed) {
        buttonMode = "clear";
        console.log('sketch cleared');
        updateButtonState();
    }
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
           row.classList.add('gridvisible');
           column.appendChild(row);
        }
    }
    console.log(board);
    return board;
}

function drawChooseColor(row, color) {
    row.forEach(row => {
        row.addEventListener('mouseover', () => {
            if (mousePressed){
                row.setAttribute('style', `background-color: ${color};`);
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

function shadeMode(row) {
    row.forEach(row => {
        let shadeCounter = 0;
        row.addEventListener('mouseover', () => {
            if (mousePressed) {
                shadeCounter++;
                let opacity = shadeCounter / 10;
                row.setAttribute('style', `background-color: rgba(0, 0, 0, ${opacity});`);
            }
        });
    });
}

function toggleGrid(row) {
    row.forEach((row) => {
        if (gridToggled) {
            row.classList.remove('gridvisible'); 
        } else {
            row.classList.add('gridvisible'); 
        }
    });    
}

function clearSketch(row) {
    row.forEach((row) => {
        row.setAttribute('style', 'background-color: white;');
    }); 
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
            colorPicker.addEventListener("input", () => {
                const color = colorPicker.value;
                drawChooseColor(board.querySelectorAll('.row'), color);
            });
            break;
        case "eraser":
            eraser(board.querySelectorAll('.row'));
            break;
        case "random":
            randomColor(board.querySelectorAll('.row'));
            break;
        case "shade":
            shadeMode(board.querySelectorAll('.row'));
            break;
        case "togglegrid":
            toggleGrid(board.querySelectorAll('.row'));
            break;
        case "clear":
            clearSketch(board.querySelectorAll('.row'));
            break;
    }
}

gridStatus();