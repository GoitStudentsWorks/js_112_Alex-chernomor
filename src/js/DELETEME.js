import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg';

const logo = document.querySelector('.logo');
const ankorList = document.querySelector('.ankors-menu');
const burgerMenuBtn = document.querySelector('.menu-burger-button');
const burgerMenuContainer = document.querySelector('.burger-menu-container');
const menuContainer = document.querySelector('.menu-div');
const burgerSVG = document.querySelector('.burgerSvgIcon')
const closeSVG = document.querySelector('.closeMenuSvgIcon')

// const ankorArr = ['About me','Benefits','Projects','FAQ'];



// const addImg = (elemForImg, img)=>{
//     elemForImg.prepend(img);
// };





// const createImg = (imgDirect,className)=>{
//     const img = document.createElement('img');
//     img.src = imgDirect;  
//     img.classList.add(className);
//     return img
// };


// addImg(logo, createImg(logoImg,'img-logo'));


// const createAnkor = str =>{
//     return`
//     <li class='ankorLink'>
//     <a href='#'>${str}<a/
//     <li/>
//     `
// };

// const createAnkorTemplate = arr => arr.map(el=>createAnkor(el)).join('');

// const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

// const addClass = function(elem, className){
//     return elem.classList.add(className)
// };

// const removeClass = function(elem, className){
//     return elem.classList.remove(className)
// };


// const toggleClass = function(elem, className){
//     return elem.classList.toggle(className);
// };
// addAnkorTemplate(createAnkorTemplate(ankorArr));

// const onclickMenuBtn = (e) =>{
//     toggleClass(ankorList,'is-hidden');
// }

const opnBgrMn = ()=>{
   
    if (burgerMenuContainer.style.display === "block") {
        burgerMenuContainer.style.display  = "none";
    } else {
        burgerMenuContainer.style.display  = "block";
    }
}

const onClickBurgerMenu = (e) =>{
    // toggleClass(burgerSVG,'is-hidden');
    // toggleClass(closeSVG,'is-hidden');
    // toggleClass(ankorList,'is-hidden'); 
    // opnBgrMn()
}

// menuContainer.addEventListener('click', onclickMenuBtn);
// burgerMenuBtn.addEventListener('click',onClickBurgerMenu);