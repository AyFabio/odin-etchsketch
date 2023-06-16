let container = document.querySelector('.container');

let row = document.createElement("div");
row.classList.add("row");

let column = document.createElement("div");
column.classList.add("column");

let gridSize = 16 ;

for (let i = 0; i < gridSize; i++) { //make 16 columns of divs in a row
    row.appendChild(column.cloneNode());
    }

for (let i = 0; i < gridSize; i++) { //make 16 rows of that div
container.appendChild(row.cloneNode(true));
}