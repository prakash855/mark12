const inputs = document.querySelectorAll(".inputs");
const button = document.querySelector("#btn");
const output = document.querySelector("#outputArea");

function calculateArea() {
  const base = inputs[0].value;
  const height = inputs[1].value;
  const area = (1 / 2) * (base * height);
  output.innerText = `The are of the triangele is: ${area} cm²`;
}

button.addEventListener("click", calculateArea);
