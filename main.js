function createGrid(size) {
  //we recup the container div
  const container = document.querySelector("#container");
  let numRows = size;
  let numCols = size;

  for (let i = 0; i < numRows; i++) {
    let divRow = document.createElement("div");
    divRow.classList.add("grid-container");
    container.appendChild(divRow);
  }

  let rows = document.getElementsByClassName("grid-container");

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < numCols; j++) {
      let divCol = document.createElement("div");
      divCol.classList.add("grid-item");
      divCol.textContent = j;
      rows[j].appendChild(divCol);
    }
  }
}

size = 16;
createGrid(size);

//hover

const squares = document.querySelectorAll(".grid-item");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.color = "red";
    square.style.background = "blue";
  });
});

//reset

// const reset = document.querySelector("#btn_reset");
// reset.addEventListener("click", function () {
//   reset.empty();
// });
