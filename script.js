const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".quantidade");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const resetar = document.querySelector(".finish button");

import questions from "./questions";

let primeira;
let segunda;

resetar.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    
loadQuestion ();
};

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
      }
    
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
      } else {
        finish();
      }
    }

    function finish() {
        textFinish.innerHTML = 
        content.style.display = "none";
        contentFinish.style.display = "flex";
    }

    