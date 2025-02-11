// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.querySelector(".close-modal");

  
  openModalBtn.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "flex";
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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".intive-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = new FormData(form);

        fetch("http://localhost:5173/submit-form", { 
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                iziToast.success({
                    title: "Success!",
                    message: "Your mail was send! ✅",
                    position: "topRight",
                    timeout: 5000
                });
                form.reset();
            } else {
                iziToast.error({
                    title: "Error!",
                    message: "Something wrong! ❌",
                    position: "topRight",
                    timeout: 5000
                });
            }
        })
        .catch(() => {
            iziToast.warning({
                title: "Warning!",
                message: "Problem with server ⚠️",
                position: "topRight",
                timeout: 5000
            });
        });
    });
});


