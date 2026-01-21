document.querySelectorAll(".feedback-bottom-right-FAQ-box-top").forEach((n) => {
  n.addEventListener("click", () => {
    n.parentElement.classList.toggle("active-FAQ");
  });
});
