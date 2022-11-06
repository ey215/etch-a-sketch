function addSquares(squares) {
  const container = document.querySelector("#container");

  let keepGoing = true;
  let numBox = squares;

  while (keepGoing === true) {
    if (numBox > 0) {
      const content = document.createElement("div");
      content.textContent = numBox;
      content.classList = "box";
      container.appendChild(content);
      numBox--;
    } else {
      keepGoing = false;
    }
  }
}

addSquares(32);
