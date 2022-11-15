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
        e.target.style.backgroundColor = "rgba(0 , 0, 0, 1.0";
      });
      numBox--;
    } else {
      keepGoing = false;
    }
  }
}

function changeSquares() {
  userNumber = prompt("How many squares per side?");

  while (userNumber < 1 || userNumber > 100) {
    userNumber = prompt("Number must be between 1 & 100");
  }
  resetBox();
  addSquares(userNumber);
}

function resetBox() {
  const content = document.getElementById("container");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

addSquares(16);
