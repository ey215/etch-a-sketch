function addSquares(squares) {
  const container = document.querySelector("#container");

  let keepGoing = true;
  let numBox = squares * squares;

  while (keepGoing === true) {
    if (numBox > 0) {
      const content = document.createElement("div");
      content.textContent = numBox;
      content.classList = "box";
      content.style.flex = "0 0 6.25%";
      container.appendChild(content);
      numBox--;
    } else {
      keepGoing = false;
    }
  }
}

addSquares(16);
