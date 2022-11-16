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
      content.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
      container.appendChild(content);

      const boxes = document.getElementById(numBox);
      boxes.addEventListener("mouseenter", (e) => {
        let bgcolor = e.target.style.backgroundColor;
        console.log(bgcolor);
        e.target.style.backgroundColor = "rgba(" + randomNumber(0, 256) + ", " + randomNumber(0, 256) + ", "
        + randomNumber(0, 256) + ", 1.0)";
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

function randomNumber(min, max) {
  return Math.random(min, max) * (max - min) + min;
}

addSquares(16);
