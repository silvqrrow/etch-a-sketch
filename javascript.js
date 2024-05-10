const container = document.querySelector(".grid__container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("grid__row");

  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("grid__square");
    square.addEventListener("mouseover", (e) => {
      e.target.style.background = "#424549";
    });
    row.appendChild(square);
  }
  container.appendChild(row);
}

/* 
separate these into functions at some point, with user input to be the paramater and the grid is created
1. user input
2. clear grid
3. create grid
*/
