const form = document.getElementById("questionForm");
const questionList = document.getElementById("questionList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const questionText = document.getElementById("questionInput").value.trim();
  const points = parseInt(document.getElementById("pointsInput").value);

  if (!questionText || isNaN(points)) return;

  const li = document.createElement("li");
  li.textContent = `${questionText} — ${points} баллов`;

  questionList.appendChild(li);

  form.reset();
});
