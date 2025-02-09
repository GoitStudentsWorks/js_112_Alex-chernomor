import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg';

const logoContainer = document.querySelector('.logo-container');
const ankorList = document.querySelector('.ankors-menu');
<<<<<<< Updated upstream
const menuCont = document.querySelector('.menu-cont');
const menuMobCont = document.querySelector('#burger-menu');
const burgerMenuBtn = document.querySelector('.menu-burger-button');
const menuBtn = document.querySelector('.menu-button');

const closeSVG = document.querySelector('.closeMenuSvgIcon');
const burgerSVG = document.querySelector('.burgerSvgIcon');
=======
const menuContainer = document.querySelector('.menu-div');
const burgerMenuBtn = document.querySelector('.menu-burger-button');

console.log(burgerMenuBtn);

>>>>>>> Stashed changes

const ankorArr = ['About me','Benefits','Projects','FAQ'];
const addImg = (elemForImg, img)=>{
    elemForImg.prepend(img);
};


const createImg = (imgDirect,className)=>{
    const img = document.createElement('img');
    img.src = imgDirect;  
    img.classList.add(className);
    return img
};

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
const createAnkor = str =>{
    return`
    <li class='ankorLink'>
    <a href='#'>${str}<a/
    <li/>
    `
};

const createAnkorTemplate = arr => arr.map(el=>createAnkor(el)).join('');

const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

<<<<<<< Updated upstream
const toggleClass = function(elem, className){
    return elem.classList.toggle(className);
};
=======

const toggleClass = function(elem, className){
    return elem.classList.toggle(className);
};

>>>>>>> Stashed changes


<<<<<<< Updated upstream
const onclickBtn = () =>{
    toggleClass(menuCont,'is-hidden');
    toggleClass(burgerSVG,'is-hidden');
    toggleClass(closeSVG,'is-hidden');
    toggleClass(menuMobCont,'menu-div-is-open');
}
=======
const onClickBurgerMenu = (e) =>{
    // toggleClass(burgerSVG,'is-hidden');
    // toggleClass(closeSVG,'is-hidden');
    // toggleClass(ankorList,'is-hidden'); 
    // opnBgrMn()
    console.log("hello");
    
}



addAnkorTemplate(createAnkorTemplate(ankorArr));
addImg(logoContainer, createImg(logoImg,'img-logo'));
>>>>>>> Stashed changes




addAnkorTemplate(createAnkorTemplate(ankorArr));
addImg(logoContainer, createImg(logoImg,'img-logo'));

menuBtn.addEventListener('click', onclickBtn);
burgerMenuBtn.addEventListener('click',onclickBtn);
menuCont.addEventListener('click',onclickBtn )

