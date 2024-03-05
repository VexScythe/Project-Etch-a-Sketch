const board = document.querySelector(".sketchboard");
const gridChoice = document.querySelector("#grid");
const gridbtn = document.getElementById("gridbtn");

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
           row.addEventListener('mouseover', () => row.setAttribute('style', 'background-color: black;'));
       
           
           //row.addEventListener('mouseout', () => row.setAttribute('style', 'background-color: none;'))
        }
    }
}
console.log(gridChoice.value);
gridbtn.addEventListener('click', (e) => makeGrid(gridChoice.value));

/*function changeBackgroundColor(cell) {
    this.setAttribute('style', 'background-color: black;');
}*/