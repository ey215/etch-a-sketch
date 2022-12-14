let boxColor = "";

function addSquares(squares) {
  const container = document.querySelector("#container");

  let keepGoing = true;
  let numBox = squares * squares;
  let percentSize = 100 / squares;
  let boxId = "";

  while (keepGoing === true) {
    if (numBox > 0) {
      const content = document.createElement("div");
      content.classList = "box";
      content.style.flex = "0 0 " + percentSize + "%";
      content.id = numBox;
      container.appendChild(content);

      const boxes = document.getElementById(numBox);
      boxes.addEventListener("mouseenter", (e) => {
        //get id of box on mousover and store in variable
        boxId = e.target.id;
        console.log(boxId);

        //get backgroundcolor of box and store in variable
        //boxColor = e.target.style.backgroundColor;
        //console.log(boxColor);

        //boxOpacity = e.target.style.opacity;
        //console.log(boxOpacity);

        //if (boxColor === false || boxOpacity === false) {

        //let boxToChange = document.getElementById(boxId);
        //boxToChange.style.backgroundColor = colorChange();
        //boxToChange.style.opacity = opacityChange();
        //}

        if (e.target.style.backgroundColor) {
          console.log("value is", e.target.style.backgroundColor);
        } else {
          e.target.style.backgroundColor = "black";
        }

        if (e.target.style.opacity) {
          let boxOpacity = e.target.style.opacity;
          boxOpacity = Number(boxOpacity);
          if (boxOpacity < 1) {
            boxOpacity = boxOpacity + 0.1;
            e.target.style.opacity = boxOpacity;
          } else {
            e.target.style.opacity = "1.0";
          }
        } else {
          e.target.style.opacity = "0.1";
        }
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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function colorChange() {
  if (boxColor === "rgb(255, 255, 255)") {
    //var colorGet =  "rgba(" + randomNumber(0, 256) + ", " + randomNumber(0, 256) + ", " + randomNumber(0, 256) + ", 1.0)";
    var colorGet = "rgb(0, 0, 0)";
    return colorGet;
  } else {
    return boxColor;
  }
}

function opacityChange() {
  if (boxOpacity < 1) {
    boxOpacity = boxOpacity + 0.1;
    return boxOpacity;
  } else {
    return boxOpacity;
  }
}

addSquares(16);
