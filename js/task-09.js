function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const span = document.querySelector(".color");

btnChangeColor.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
});
