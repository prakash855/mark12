const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is_triangle");
const ouput = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3; 
  return sumOfAngles;
}
function triangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  sumOfAngles === 180
    ? (ouput.innerText = "Yay!! angles form a traingle")
    : (ouput.innerText = "Oh ho! it can't be a triangle");
}

isTriangleButton.addEventListener("click", triangle);
