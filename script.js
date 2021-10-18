let gridRows = 16;

/* Function that creates the etch-a-sketch grid */
function createGrid() {
  // Get grid container
  const gridContainer = document.querySelector(".grid-container");

  // Create rows and columns for grid
  for (let i = 0; i < gridRows * gridRows; i++) {
    // Create grid cell and add grid-item class
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    gridContainer.appendChild(cell);
  }
}

createGrid();
console.log("I ran");
