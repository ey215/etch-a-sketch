function addSquares(squares) {
  const container = document.querySelector("#container");

  let keepGoing = true;
  let numBox = squares * squares;
  let percentSize = 100 / squares;

  while (keepGoing === true) {
    if (numBox > 0) {
      const content = document.createElement("div");
      content.classList = "box";
      content.style.flex = "0 0 " + percentSize + "%";
      content.id = numBox;
      container.appendChild(content);

      const boxes = document.getElementById(numBox);
      boxes.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "orange";
      });
      numBox--;
    } else {
      keepGoing = false;
    }
  }
}

function changeSquares() {
  let squares = prompt("How many squares per side?");

  while (squares < 1 || squares > 100) {
    squares = prompt("Number must be between 1 & 100");
  }
  console.log(squares);
}

addSquares(10);
