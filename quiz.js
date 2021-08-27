const quizForm = document.querySelector(".quiz_form");
const submitAnswerButton = document.querySelector("#submit_answer_btn");
const output = document.querySelector("#outputRadio");

const correctAnswers = ["90°", "Right-Angle"];

function calculateScore() {
  let score = 0,
    index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  output.innerText = `Hi, Your score is ${score}`
}

submitAnswerButton.addEventListener("click", calculateScore);
