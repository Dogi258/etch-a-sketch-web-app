// Get root document element
let root = document.documentElement;

// Get clear button
const button = document.querySelector("button");

function clearGrid() {
  // Remove grid container
  let grid = document.querySelector(".grid-container");
  grid.remove();

  // Add new grid container
  let newGridContainer = document.createElement("div");
  newGridContainer.classList.add("grid-container");

  let main = document.querySelector("main");
  main.appendChild(newGridContainer);
  // Ask for input for the next grid
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

  // Create new grid with input
  createGrid(gridSize);
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
button.addEventListener("click", clearGrid);
