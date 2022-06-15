const grid = document.getElementById('container');

for (let i=0; i<16; i++) {
  const cell = document.createElement("div");
  cell.style.aspectRatio = "1 / 1";
  cell.style.border = "solid black 1px";
  cell.onmouseover = function() {mouseOver(cell)};
  //cell.onmouseout = function() {mouseOut(cell)};
  grid.appendChild(cell);
}
  
function mouseOver(cell) {
  cell.style.backgroundColor = "black";
}

function mouseOut(cell) {
  cell.style.backgroundColor = "white";
}