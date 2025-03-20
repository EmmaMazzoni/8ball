document.getElementById('shakeButton').addEventListener('click', () => {
  const answers = [
    "Yes", "No", "Maybe", "Ask again later", "Oh for sure", "Nawr ur delusional",
    "Try again later", "Not for you", "Absolutely"
  ];

  const randomIndex = Math.floor(Math.random() * answers.length);
  const answerBox = document.getElementById("answerBox");

  answerBox.textContent = answers[randomIndex];
  answerBox.style.display = "block";
});