function removeGrid() {
    const flexboxGrid = document.querySelector(".flexbox-grid");
    flexboxGrid.remove();
}

function askNumberOfSquaresPerSide() {
    let correctEntry = false;
    
    while(correctEntry == false) {
        const squaresPerSide = parseInt(prompt("How many squares per side do you want?"));

        if(squaresPerSide <= 100) {
            removeGrid();
            createGrid(squaresPerSide);
            correctEntry = true;
        }
        
        else {
            alert("The maximum of squares per side is 100.")
        }
    }
}

function addButton() {
    const flexboxScreen = document.querySelector(".flexbox-screen");
    const button = document.createElement("button");
    button.classList.add('button');  
    button.textContent = "Number of squares";
    flexboxScreen.appendChild(button);

    button.addEventListener("click", askNumberOfSquaresPerSide);
}

function createGrid(squaresPerSide) {
    const sizeGrid = 800;
    const flexboxScreen = document.querySelector(".flexbox-screen");
    const flexboxGrid = document.createElement("div");
    flexboxGrid.classList.add('flexbox-grid'); 

    for(let i = 0; i < squaresPerSide; i++) {

        const divRow = document.createElement("div");
        divRow.classList.add('row');  
        divRow.style.border = "1px solid blue";

        for(let j = 0; j < squaresPerSide; j++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add('column'); 
            divColumn.style.border = "1px solid blue";
            divColumn.style.height = (sizeGrid / squaresPerSide) + "px";
            divColumn.style.width = (sizeGrid / squaresPerSide) + "px";
            divColumn.style.lineHeight =(sizeGrid / squaresPerSide) + "px";
            divRow.appendChild(divColumn);
        }

        flexboxGrid.appendChild(divRow);
    }

    flexboxScreen.appendChild(flexboxGrid);

    addHoverEventListener();
}

function changecolor(e) {
    e.target.classList.add("new-color")
}

function addHoverEventListener() {
    const squares = document.querySelectorAll(".column");

    squares.forEach(square => {
        square.addEventListener("mouseenter", changecolor);
    });
}

function createLayout() {
    addButton();
    createGrid(16);
}

createLayout();