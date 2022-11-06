function addSquares() {
const container = document.querySelector("container");
const content = document.createElement.("div");

let keepGoing = true;
let numBox = 16;

while (keepGoing === true) {
    if (numBox > 0) {
        content.textContent = numBox;
        container.appendChild(content);
        numBox--;
        keepGoing = true;
    }
    else {
        keepGoing = false;
    }
}
}