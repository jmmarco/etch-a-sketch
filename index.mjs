import { populateGrid, generateGrid, generateStepper } from "./helpers.mjs";

(() => {
  const APP_SETTINGS = {
    defaultGridDimensions: 600,
    defaultGridSize: 47,
  };

  const myGrid = generateGrid(APP_SETTINGS.defaultGridDimensions);
  populateGrid(64, myGrid);

  const gridContainer = document.querySelector(".grid-container");
  const gridControls = document.querySelector(".grid-controls");
  gridContainer.append(myGrid);
  gridControls.append(generateStepper(1, 64));

  const stepper = document.getElementById("gridSize");
  stepper.addEventListener("input", (e) => {
    const { value } = e.target;
    document.getElementById(
      "gridSizeValue"
    ).textContent = `${value} x ${value}`;
    gridContainer.replaceChildren();
    const myGrid = generateGrid(APP_SETTINGS.defaultGridSize);
    populateGrid(value, myGrid);
    gridContainer.append(myGrid);
  });
})();
