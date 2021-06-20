
// Set variables for the canvas, colour picker & form
const myTable = document.getElementById('pixelCanvas');
const fillColour = document.getElementById('colorPicker');
const form = document.getElementById('sizePicker');

//Define function to create the grid
function makeGrid(rows,cells) {

    //Re-set table back to original state
    myTable.innerHTML = '';

    // Create table body
    const tableBody = document.createElement('tbody');

    //Create the grid
    for(let r = 0; r < rows; r++) {

        //Create a row
        const row = document.createElement('tr');

        //Create cells & append to row
        for (let c = 0; c < cells; c++) {
            const cell = document.createElement('td');

            //Add listeners to cells to change background colour
            cell.addEventListener('click', function (evt) {
                evt.target.style.backgroundColor = fillColour.value;
            })

            //Append the cells to the row
            row.appendChild(cell);
        }
        //Append the row to the table body
        tableBody.appendChild(row);
    }
    // Append the table body to the table row
    myTable.appendChild(tableBody);
};

// Listen for form submission & then trigger makeGrid()
form.addEventListener('submit', function (evt) {
    const rows = document.getElementById('inputHeight').value;
    const cells = document.getElementById('inputWidth').value;
    makeGrid(rows, cells);
    evt.preventDefault();
});
