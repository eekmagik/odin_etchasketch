const grid = document.getElementById('container');

function mouseOver(cell) {
  cell.style.backgroundColor = "black";
}

function mouseOut(cell) {
  cell.style.backgroundColor = "white";
}

function gridSize() {
  let size = prompt("Size: 1-100");
  if (size > 100 || size < 1 || size === NaN) {
    document.getElementsByClassName('header').textContent = "Choice out of range"
  }else {
    grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    for (let i=0; i<size**2; i++) {
      const cell = document.createElement("div");
      cell.style.aspectRatio = "1 / 1";
      //cell.style.border = "solid black 1px";
      cell.onmouseover = function() {mouseOver(cell)};
      //cell.onmouseout = function() {mouseOut(cell)};
      grid.appendChild(cell);
    }
  }
}

