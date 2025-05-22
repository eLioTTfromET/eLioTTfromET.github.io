// Select the grid container
const grid = document.getElementById('buttonGrid');
const columns = 16; // Number of columns
const rows = 8; // Number of rows

// Create a 2D array to store the light states for each button
const buttonStates = Array.from({ length: rows }, () => Array(columns).fill(false));

// Create an element to display the clicked button's coordinates
const output = document.createElement('div');
output.id = 'output';
output.style.marginTop = '10px';
output.style.marginLeft = '10px';
output.style.fontSize = '20px';
output.style.fontFamily = '"Andale Mono", monospace';
output.style.color = 'white'; // Set text color to white
document.body.appendChild(output);

// Set default text content before any button is pressed
output.textContent = 'X Y Z';

// Create the grid of buttons
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    const button = document.createElement('div');
    button.classList.add('button', 'off'); // Default state
    button.dataset.col = col; // Store column as a data attribute
    button.dataset.row = row; // Store row as a data attribute

    // Add click functionality
    button.addEventListener('click', () => {
      toggleLight(col, row, button);
      displayCoordinates(col, row); // Display coordinates when button is pressed
    });

    grid.appendChild(button);
  }
}

// Function to toggle the light state
function toggleLight(col, row, button) {
  // Toggle the state in the 2D array
  buttonStates[row][col] = !buttonStates[row][col];

  // Update the button's visual state
  if (buttonStates[row][col]) {
    button.classList.remove('off');
    button.classList.add('on');
  } else {
    button.classList.remove('on');
    button.classList.add('off');
  }
}

// Function to display the column, row, and light state
function displayCoordinates(col, row) {
  const lightState = buttonStates[row][col] ? '1' : '0';
  output.textContent = `${col} ${row} ${lightState}`;
}
