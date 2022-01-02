const container = document.getElementById("container");
let cell;

function makeGrid(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };

};

makeGrid(16, 16);

const hover = document.querySelector("div");
hover.addEventListener("mouseover", function(event) {
  event.target.classList.add("hover");
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", function() {
  console.log("clear called");
  document.getElementById("container").innerHTML = "";
  let newGrid = prompt("what size?");
  if (newGrid > 100) {
    newGrid = 100;
  }
  rows = newGrid;
  cols = newGrid;
  makeGrid(rows, cols);
});
