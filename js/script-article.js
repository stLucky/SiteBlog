// comment-form

let commentForm = document.querySelector(".comment-form");
let commentField = document.querySelector(".comment-form__field");
let commentButton = document.querySelector(".comment-form__button");
let commentList = document.querySelector(".comments__list");
let commentName = document.querySelector("[type=text]");

commentForm.onsubmit = function (evt) {
  if (commentField.value.length <= 10 || commentField.value.length >200) {
    evt.preventDefault();
    commentField.classList.add("warning");
    commentButton.disabled = true;
    commentButton.classList.add("disabled");
  } else {
  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  let newBlockquote = document.createElement('blockquote');
  newBlockquote.classList.add('comments__comment');
  let newCite = document.createElement('cite');
  newCite.classList.add('comment__name');
  newCite.textContent = commentName.value;
  let newP = document.createElement('p');
  newP.classList.add('comment__text');
  newP.textContent = commentField.value;
  commentField.value = '';
  newBlockquote.append(newCite);
  newBlockquote.append(newP);
  newComment.append(newBlockquote);
  commentList.append(newComment);
  }
};

commentField.oninput = function () {
  if (commentField.value.length > 10 || commentField.value.length <=200) {
    commentField.classList.remove('warning');
    commentButton.disabled = false;
    commentButton.classList.remove("disabled");
  }
};

// like

let like = document.querySelector(".article-footer__button");
let likesNumber = document.querySelector(".likes-number");

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  
  like.classList.toggle('added');
};

