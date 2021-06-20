
// Set variable for the canvas
const myTable = document.getElementById('pixelCanvas');

//Define makeGrid() function
function makeGrid(rows,cells) {
    //Re-set table back to original state
    myTable.innerHTML = '';

    // Create table body
    const tableBody = document.createElement("tbody");

    //Create the grid
    for(let r = 0; r < rows; r++) {
        //Create a row
        const row = document.createElement('tr');
        //Create cells & append to row
        for (let c = 0; c < cells; c++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        //Append the row to the table body
        tableBody.appendChild(row);
    }
    // Append the table body to the table row
    myTable.appendChild(tableBody);
};

// Listen for sizePicker form submission & then trigger makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function (evt) {
    const rows = document.getElementById('inputHeight').value;
    const cells = document.getElementById('inputWidth').value;
    makeGrid(rows, cells);
    evt.preventDefault();
});

// Listen for a click on a <td> element
// Listener on table to prevent listeners on each <td>
myTable.addEventListener('click', function (evt) {
    const fillColour = document.getElementById('colorPicker');
    if (evt.target.nodeName === 'TD') {
        evt.target.style.backgroundColor = fillColour.value;
  }
});
