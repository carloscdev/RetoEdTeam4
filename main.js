const questionItem = document.getElementsByClassName(
  "questions__container--item"
);
document.querySelectorAll(".item").forEach((el) => {
  el.addEventListener("click", function questionItemActive() {
    const indexItem = this.parentNode.className;
    for (let i = 0; i < questionItem.length; i++) {
      questionItem[i].className = "questions__container--item";
    }
    if (indexItem === "questions__container--item") {
      this.parentNode.className = "questions__container--item active";
    }
  });
});
