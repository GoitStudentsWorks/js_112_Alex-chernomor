document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formfield");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-modal");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("http://www.goit.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("✅ Your mail was sent successfully!");
          form.reset();
          modal.style.display = "flex";
        } else {
          alert("❌ Something wrong! Please try again.");
        }
      })
      .catch(() => {
        alert("⚠️ Problem with the server. Please try later.");
      });
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
});




