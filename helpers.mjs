export function populateGrid(gridSize, gridContainer, borderOffset = 4) {
  if (
    !isElement(gridContainer) &&
    typeof gridSize !== "number" &&
    typeof borderOffset !== "number"
  )
    return;

  const { width, height } = gridContainer.style;
  const side = 600 / gridSize;

  for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${side}px`;
    cell.style.height = `${side}px`;
    cell.style.border = `1px solid deepskyblue`;
    cell.classList.add("cell");
    trace(cell);
    gridContainer.appendChild(cell);
  }

  gridContainer.style.width = `${parseInt(width) + borderOffset}px`;
  gridContainer.style.height = `${parseInt(height) + borderOffset}px`;
}

export function generateGrid(value) {
  if (typeof value !== "number") return;
  const grid = document.createElement("div");
  grid.id = "grid";
  grid.style.width = `${value}px`;
  grid.style.height = `${value}px`;
  return grid;
}

export function generateStepper(min, max, stepperName = "gridSize") {
  if (typeof min !== "number" && typeof max !== "number") return;
  const stepperContainer = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const span = document.createElement("span");
  input.id = stepperName;
  input.name = stepperName;
  input.type = "range";
  input.min = `${min}`;
  input.max = `${max}`;
  label.for = stepperName;
  label.textContent = "Grid size:"
  span.id = "gridSizeValue"
  label.appendChild(span);
  stepperContainer.appendChild(input)
  stepperContainer.appendChild(label)
  return stepperContainer;
}

function isElement(element) {
  return element instanceof Element || element instanceof Document;
}

function trace(element, className = "active") {
  if (!isElement(element)) return;
  element.addEventListener("mouseenter", (e) => {
    element.classList.add(className);
  });
}

export function handleStepChange(e) {
  console.log(e.target.value)

}