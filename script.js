let gridContainer = document.querySelector('.grid-container');

let row = document.createElement("div");
row.classList.add("row");

let column = document.createElement("div");
column.classList.add("column");

let gridSize = 30;
let btn = document.querySelector("button");

btn.addEventListener("click", () => { //button changes grid size.
    let newGridSize = prompt("Please choose a number between 1 - 100.")
    if (newGridSize === null) return;
    while (isNaN(newGridSize) || +newGridSize < 1 || +newGridSize > 100) {
        newGridSize = prompt("Invalid choice! Please choose a number between 1 - 100. ")
        if (newGridSize === null) return;
    }
    changeGridSize(newGridSize);
});


function changeGridSize(gridSize) { //reset grid then remake grid
    gridContainer.textContent = '';
    row.textContent = '';
    column.textContent = '';

    for (let i = 0; i < gridSize; i++) { //make 16 columns of divs in a row
        row.appendChild(column.cloneNode());
        }

    for (let i = 0; i < gridSize; i++) { //make 16 rows of that div
    gridContainer.appendChild(row.cloneNode(true));
    }   
}

changeGridSize(gridSize);