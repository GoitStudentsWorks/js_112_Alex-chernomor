import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg';

const logoContainer = document.querySelector('.logo-container');
const ankorList = document.querySelector('.ankors-menu');
const menuCont = document.querySelector('.menu-cont');
const menuMobCont = document.querySelector('#burger-menu');
const burgerMenuBtn = document.querySelector('.menu-burger-button');
const menuBtn = document.querySelector('.menu-button');

const closeSVG = document.querySelector('.closeMenuSvgIcon');
const burgerSVG = document.querySelector('.burgerSvgIcon');

const ankorArr = ['About me','Benefits','Projects','FAQ'];

export const addImg = (elemForImg, img)=>{
    elemForImg.prepend(img);
};

export const createImg = (imgDirect,className)=>{
    const img = document.createElement('img');
    img.src = imgDirect;  
    img.classList.add(className);
    return img
};

const createAnkor = (str, id) =>{
    return`
    <li class='ankorLink'>
    <a href='#${id}'>${str}</a>
    <li/>
    `
};

const createId = str => str.toLowerCase().split(" ").join("-")


const createAnkorTemplate = arr => arr.map(el=>createAnkor(el,createId(el))).join('');

const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

const toggleClass = function(elem, className){
    return elem.classList.toggle(className);
};


const onclickBtn = () =>{
    toggleClass(menuCont,'is-hidden');
    toggleClass(burgerSVG,'is-hidden');
    toggleClass(closeSVG,'is-hidden');
    toggleClass(menuMobCont,'menu-div-is-open');
}




addAnkorTemplate(createAnkorTemplate(ankorArr));
addImg(logoContainer, createImg(logoImg,'img-logo'));

menuBtn.addEventListener('click', onclickBtn);
burgerMenuBtn.addEventListener('click',onclickBtn);
menuCont.addEventListener('click',onclickBtn )

