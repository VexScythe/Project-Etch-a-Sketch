const container = document.querySelector(".container");

function makeGrid() {
    for (let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            const div = document.createElement('div');
            div.textContent = `${i}`;
            div.setAttribute('style', 'display: flex; flex: 1; flex-direction: column;')
            container.appendChild(div);
        }
    }
}

makeGrid();