function checkQuiz(formId, correctAnswers) {
  const form = document.getElementById(formId);
  let score = 0;
  let totalQuestions = correctAnswers.length;

  correctAnswers.forEach((answer, index) => {
    const selected = form.querySelector(`input[name=q${index + 1}]:checked`);
    if (selected && selected.value === answer) {
      score++;
    }
  });

  const resultText = `You scored ${score} out of ${totalQuestions}!`;
  document.getElementById(formId + "-result").innerText = resultText;
}
