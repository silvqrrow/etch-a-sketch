const container = document.querySelector(".grid__container");
const square = document.createElement("div");

square.classList.add("grid__square");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("grid__row");

  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("grid__square");
    row.appendChild(square);
  }
  container.appendChild(row);
}
