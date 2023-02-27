let container = document.querySelector('.container');


for(i = 0; i < 16; i++){
    let newRow = document.createElement('div');
    newRow.style.display = "inline-block";

    for(j = 0; j < 16; j++){
        let newDiv = document.createElement('div');
        newDiv.style.border = "solid";
        newDiv.style.height = "40px";
        newDiv.style.width = "40px";

        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}

let grids = document.querySelectorAll('.container div div');


for(let grid of grids){
    grid.addEventListener('mouseover',
    () => grid.style.background = 'red'
    )

    grid.addEventListener('mouseout', 
    () => grid.style.background = 'white'
    )
}

