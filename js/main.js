const flexboxScreen = document.querySelector(".flexbox-screen");
console.log(flexboxScreen);

for(let i = 0; i < 16; i++) {

    const divRow = document.createElement("div");
    divRow.classList.add('row');  
    divRow.style.border = "1px solid blue";

    for(let j = 0; j < 16; j++) {
        const divColumn = document.createElement("div");
        divColumn.classList.add('column');  
        divColumn.style.border = "1px solid blue";
        divColumn.textContent = (i + 1) + " - " + (j + 1);
        divRow.appendChild(divColumn);
    }

    flexboxScreen.appendChild(divRow);
}