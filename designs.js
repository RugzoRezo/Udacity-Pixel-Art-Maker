// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(row_num,column_num) {
    // when the table is already defined before, remove it first.
    if(document.querySelector("tbody") !== null ){
        document.querySelector("tbody").remove();
    }
    //Set the table according to the submitted values
    const table = document.getElementById("pixelCanvas");
    for(let i = 0; i < row_num; i++){
        rows = []; cells = [];
        //Set the rows first
        rows[i] = table.insertRow(i);
        for (let j = 0; j < column_num; j++){
            //Set the columns then
            cells[j] = rows[i].insertCell(j);
            //Assign Event Listener to every cell to color it
            cells[j].addEventListener('click',function(event){
                let targetCell = event.target;
                targetCell.style.backgroundColor = colorPicker.value;                                
            });
        }
    }
}

function submitted(){
    //To prevent the default action
    event.preventDefault();
    //Get the values for the table
    const row_num = document.getElementById("sizePicker").elements[0].value;
    const column_num = document.getElementById("sizePicker").elements[1].value;
    //Send the values
    makeGrid(row_num,column_num);
}

//Assign an Event Listener to "Submit" button
document.getElementById("sizePicker").addEventListener("submit",submitted);

// Default values for table grid.
makeGrid(10, 10); 