const grid = document.getElementById('container');

for (let i=0; i<16; i++) {
  const cell = document.createElement("div");
  cell.style.aspectRatio = "1 / 1";
  cell.style.border = "solid black 1px";
  grid.appendChild(cell);
}
  