const colorContainers = document.querySelectorAll(".color-container");

function getNameColors() {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);

  return `The color is RGB(${R}, ${G}, ${B})`;
}

// Note: The function that get a random color in RGB was done but we need to do this in HEX;

console.log(getNameColors());