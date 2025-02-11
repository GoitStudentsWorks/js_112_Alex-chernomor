document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.querySelector(".close");

  
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


/*button*/

const createImg = (imgDirect, className) => {
    const img = document.createElement('img'); 
    img.src = imgDirect; 
    img.classList.add(className); 
    return img;
};



const imgElement = createImg('../img/imgPNG/btn.png', 'send-button'); 
const container = document.querySelector('.button-container'); 

if (container) {
    addImg(container, imgElement);
} else {
    console.error("not found!");
}


/*user*/


import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg';

document.addEventListener("DOMContentLoaded", () => {
    const titleContainer = document.querySelector('.title-div');



    const createImg = (imgDirect, className) => {
        const img = document.createElement('img');
        img.src = imgDirect;
        img.classList.add(className);
        return img;
    };

    const addImg = (elemForImg, img) => {
    if (elemForImg) {
        elemForImg.prepend(img); 
    } else {
        console.error("not found!");
    }
};

    addImg(titleContainer, createImg(logoImg, 'img-logo'));
});

