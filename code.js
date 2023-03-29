const btn = document.querySelector(`#btn`);
let input = 0;
let removeCount = 0;

btn.addEventListener(`click`, createGrid);



function createGrid(input) {
    if (removeCount > 0) {
        removeChildElements();
    }

    input = prompt("Please enter number up to 100: ");
    const squares = document.querySelector(`#squares`);
    
    if ( input <= 100) {
        for (let i = 0; i <= input * input; i++) {
                const gridSqr = document.createElement(`gridSqr`);
                gridSqr.classList.add(`gridSqr`);
            
                squares.appendChild(gridSqr);
                console.log(gridSqr);
        }
        const grid = document.querySelectorAll(`.gridSqr`);

        grid.forEach((grid) => {
            grid.addEventListener(`mouseover`, () => {
                grid.style.backgroundColor = "blue";
        });
});
        removeCount = 1;
        console.log(removeCount);
    }
}

function removeChildElements() {
    squares.replaceChildren();
}




