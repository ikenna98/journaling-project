const main = document.querySelectorAll(".main");
const comment = document.querySelector(".comment");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const postBtn = document.querySelector(".btn");
const postCommentBtn = document.querySelector(".btn-comment");
const commentText = document.querySelector(".comment-text");
const commentSection = document.querySelector(".all-comments");
const commentIcon = document.querySelectorAll(".add-comment");
const emojiNotOpenComment = document.querySelectorAll(".fa-regular");
const article = document.querySelectorAll("article");
const gridSection = document.querySelector(".main-grid");
const logo = document.querySelector(".logo");
const navigation = document.querySelector("nav");

// Toggles comments on the post
main.forEach((eachMain) =>
  eachMain.addEventListener("click", function (e) {
    const clicked = e.target;
    console.log(clicked);
    if (
      clicked.classList.contains("face-emoji") ||
      clicked.classList.contains("emojis") ||
      clicked.classList.contains("emoji-numbers")
    ) {
      return console.log("Cant open");
    } else eachMain.nextElementSibling.classList.toggle("comment");
  })
);

// MAKE a new post
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((e) => e.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Make emojis hover and have opacity
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("face-emoji")) {
    const link = e.target;
    const siblings = link.closest(".emojis").querySelectorAll(".face-emoji");
    const numbers = link.closest(".emojis").querySelectorAll("label");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    numbers.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

main.forEach((e) =>
  e.addEventListener("mouseover", (e) => handleHover(e, 0.5))
);

main.forEach((e) => e.addEventListener("mouseout", (e) => handleHover(e, 1)));

// Make logo scroll to the top
const logoScrollTop = function () {
  navigation.scrollIntoView({ behavior: "smooth" });
};

logo.addEventListener("click", logoScrollTop);



