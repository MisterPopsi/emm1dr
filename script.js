const questions = [
  { text: "Сколько будет 2 + 2?", points: 1 },
  { text: "Столица Франции?", points: 2 },
  { text: "Какой год был основан GitHub?", points: 3 },
];

let score = 0;

const listEl = document.getElementById("question-list");
const scoreEl = document.getElementById("score");

questions.forEach((q, index) => {
  const li = document.createElement("li");
  li.textContent = `${q.text} (+${q.points} балл)`;
  li.onclick = () => {
    score += q.points;
    scoreEl.textContent = `Баллы: ${score}`;
    li.style.textDecoration = "line-through";
    li.style.pointerEvents = "none"; // чтобы нельзя было нажимать снова
  };
  listEl.appendChild(li);
});
