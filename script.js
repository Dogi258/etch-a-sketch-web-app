// Get root document element
let root = document.documentElement;
// Get clear button
const button = document.querySelector("button");

// Ask for input for the next grid; Returns the grid size
function promptGridSize() {
  let gridSize = window.prompt(
    "How many squares per side will the new grid have? (1-100)"
  );

  // Validate input
  while (true) {
    if (gridSize > 0 && gridSize <= 100) {
      break;
    }
    gridSize = window.prompt("Invalid Input (Try 1-100)");
  }

  return gridSize;
}

function clearGrid() {
  // Clear grid-container elements
  let grid = document.querySelector(".grid-container");
  grid.innerHTML = "";
}

/* Function that creates the etch-a-sketch grid */
function createGrid(gridRows = 16) {
  // Get grid container
  const gridContainer = document.querySelector(".grid-container");

  // Set CSS row and col variable
  root.style.setProperty("--row", gridRows);
  root.style.setProperty("--col", gridRows);

  // Create rows and columns for grid
  for (let i = 0; i < gridRows * gridRows; i++) {
    // Create grid cell and add grid-item class
    const cell = document.createElement("div");
    cell.classList.add("grid-item");

    // Changes color of div when mouse is over
    cell.addEventListener("mouseenter", function () {
      cell.classList.add("hovered");
    });

    gridContainer.appendChild(cell);
  }
}

// Default grid when the page loads
createGrid();

// Event listener for clicking clear grid button
button.addEventListener("click", function () {
  clearGrid();
  createGrid(promptGridSize());
});
