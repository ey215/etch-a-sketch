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
      content.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
      container.appendChild(content);

      const boxes = document.getElementById(numBox);
      boxes.addEventListener("mouseenter", (e) => {
        
        //get id of box on mousover and store in variable
        boxId = e.target.id;
        console.log(boxId);

        //get backgroundcolor of box and store in variable
        boxColor = e.target.style.backgroundColor;
        console.log(boxColor);
      

        let boxToChange = document.getElementById(boxId);
        boxToChange.style.backgroundColor = colorChange();

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
  return Math.floor(Math.random() * (max - min) + min); }

function colorChange() {
  if (boxColor === "rgba(255, 255, 255, 0)") {
    //var colorGet =  "rgba(" + randomNumber(0, 256) + ", " + randomNumber(0, 256) + ", " + randomNumber(0, 256) + ", 1.0)"; 
    let parts = boxColor.split(",");
    let results = parts[3];
    let opacityNumber = results.slice(0, -1);
    console.log(opacityNumber);

      if (opacityNumber < 1) {
        opacityNumber = opacityNumber + 0.1;        
      }
      else {
        opacityNumber = 1;
      }
    
    var colorGet = "rgba(0, 0, 0, " +  opacityNumber + ")";
    opacity();
    return colorGet;
  } 
  else {
    
  }
}

function opacity() {
  let parts = boxColor.split(",");
  let results = parts[3];
  let opacityNumber = results.slice(0, -1);
  console.log(opacityNumber);

  if (opacityNumber < 1) {
    opacityNumber = opacityNumber + 0.1;
    return opacityNumber;
  }
  else {
    return opacityNumber;
  }
}

addSquares(16);
opacity