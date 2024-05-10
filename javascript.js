const container = document.querySelector(".grid__container");
const btn = document.querySelector(".btn");

btn.onclick = () => {
  let gridSize;
  do {
    gridSize = prompt("Input a grid size up to 100:", 16);
  } while (gridSize <= 0 || gridSize > 100);
  deleteGrid();
  createGrid(gridSize);
};

const createGrid = (gridSize) => {
  // Create rows until the desired size
  for (let rows = 0; rows < gridSize; rows++) {
    const row = document.createElement("div");
    row.classList.add("grid__row");

    // Fill in each row with the squares
    for (let squares = 0; squares < gridSize; squares++) {
      const square = document.createElement("div");
      square.classList.add("grid__square");
      // Add a colour to the square if it is hovered
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomRGB();
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
};

const deleteGrid = () => {
  container.replaceChildren();
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
// Default Grid
createGrid(16);
