const colorContainers = document.querySelectorAll(".color-container");

const HEXColor = () => {
  const HEXColor = (Math.random() * 0xfffff * 100000).toString(16);
  return `#${HEXColor}`.slice(0, 7);
} 

colorContainers.forEach((container) => {
  container.innerHTML = HEXColor();
  container.style.backgroundColor = HEXColor();
});