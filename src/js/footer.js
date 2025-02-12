
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formfield");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-modal");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    modal.classList.remove("is-hidden");
  });

  form.reset();
  
  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("is-hidden");
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("is-hidden");
    }
  });


  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.add("is-hidden");
    }
  });
});




