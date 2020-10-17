let articles = document.querySelectorAll(".articles__article");
let filter = document.querySelector(".articles__filter")

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== "all") {
      article.classList.add("hidden");
      } else {
      article.classList.remove("hidden");
      }
    }
};

// feedback-form

let feedbackForm = document.querySelector(".feedback-form");
let feedbackField = document.querySelector(".feedback-form__field");
let feedbackButton = document.querySelector(".feedback-form__button")

feedbackForm.onsubmit = function (evt) {
  if (feedbackField.value.length <= 10 || feedbackField.value.length >200) {
    evt.preventDefault();
    feedbackField.classList.add("warning");
    feedbackButton.disabled = true;
  } 
};

feedbackField.oninput = function () {
  if (feedbackField.value.length > 10 || commentField.value.length <=200) {
    feedbackField.classList.remove('warning');
    feedbackButton.disabled = false;
  }
};


