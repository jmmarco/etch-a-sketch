import {
  populateGrid,
  generateGrid,
  generateStepper,
  handleStepChange,
} from "./helpers.mjs";

(() => {

  const APP_SETTINGS = {
    maxGridSize: 600,
    defaultCellSize: 47,
  }
  const myGrid = generateGrid(600);
  populateGrid(37, myGrid);

  const gridContainer = document.querySelector(".grid-container");
  const gridControls = document.querySelector(".grid-controls");
  gridContainer.append(myGrid);
  gridControls.append(generateStepper(1, 60));

  const stepper = document.getElementById("gridSize");
  stepper.addEventListener("input", (e) => {
  
    document.getElementById('gridSizeValue').textContent = e.target.value;
    // const span = document.getElementById('gridSizeValue')
    // console.log(span)
    gridContainer.replaceChildren()
    const myGrid = generateGrid(600);
    populateGrid(e.target.value, myGrid);
    gridContainer.append(myGrid);
  });
})();
