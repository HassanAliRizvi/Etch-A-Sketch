//setting important vars for the grid
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cells");

//calling the makeGrid function
//making the 16x16 grid
makeGrid(16,16)

//makeGrid function to create the table
function makeGrid(table_row, table_col){
    
    //----------------------------------------------------
    //makes rows of the grid
    //initialized i as the counter
    //gridRow inside the row vars which is inside the container vars
    for(let i=0 ; i<table_row ; i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }

    //----------------------------------------------------
    //makes columns of the grid
    //initialized j and i as the counter
    for(let j = 0; j<rows.length;j++){
        for(let k=0 ; k<table_col; k++){
            new_cell = document.createElement("div");
            rows[j].appendChild(new_cell).className = "cell";
        }

    }
   
}

