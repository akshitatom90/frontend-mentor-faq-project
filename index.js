const question = document.querySelectorAll(".answer-wrapper");
const answer = document.querySelectorAll(".answer");
const icon = document.querySelectorAll(".arrow");


for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    if (answer[i].classList.contains("hidden")) {
      answer[i].classList.remove("hidden");
      icon[i].classList.add("rotate")
   
    } else {
      answer[i].classList.add("hidden");
      icon[i].classList.remove("rotate")
    }
  });
}
