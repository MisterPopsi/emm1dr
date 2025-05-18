// script.js
const questions = [
  { text: "Сколько будет 2 + 2?", points: 1 },
  { text: "Столица Франции?", points: 2 },
  { text: "В каком году появился JavaScript?", points: 3 },
  { text: "Самая популярная ОС?", points: 2 },
  { text: "Цвет логотипа GitHub?", points: 1 },
];

let score = 0;

const listEl = document.getElementById("question-list");
const scoreEl = document.getElementById("score");

function updateScore() {
  scoreEl.textContent = `Баллы: ${score}`;
}

questions.forEach((q) => {
  const li = document.createElement("li");
  li.textContent = `${q.text} (+${q.points})`;
  li.addEventListener("click", () => {
    score += q.points;
    updateScore();
    li.classList.add("used");
  });
  listEl.appendChild(li);
});

updateScore();
