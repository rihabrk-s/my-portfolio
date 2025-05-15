function checkAnswer(button, isCorrect) {
  const feedback = document.getElementById("feedback");
  if (isCorrect) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "lightgreen";
  } else {
    feedback.textContent = "❌ Incorrect. Try again.";
    feedback.style.color = "red";
  }
}
