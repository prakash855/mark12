const inputs = document.querySelectorAll(".side_inputs");
const button = document.querySelector("#btnHypo");
const output = document.querySelector("#outputHypo");

function calculateSquareroot(number) {
  output.innerText = `The hypotenuse is ${Math.sqrt(number)}`;
}

function calculatSumOfSquares(a, b) {
  const sumOfSquares = a ** 2 + b ** 2;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculatSumOfSquares(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
  output.innerText = `The length of hypotenuse is: ${Math.sqrt(sumOfSquares)}`
}

button.addEventListener("click", calculateHypotenuse);
