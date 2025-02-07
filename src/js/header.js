import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg'

const logoContainer = document.querySelector('.logo-container');
const ankorList = document.querySelector('.ankors-menu');
const menuButton = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.menu-div');

const ankorArr = ['About me','Benefits','Projects','FAQ'];


const createImg = (imgDirect,className)=>{
    const img = document.createElement('img');
    img.src = imgDirect;  
    img.classList.add(className);
    return img
}

;
const addImg = (elemForImg, img)=>{
    elemForImg.prepend(img);

}
addImg(logoContainer,createImg(logoImg,'img-logo'));


const createAnkor = str =>{
    return`
    <li class='acnkorLink'>
    <a href='#'>${str}<a/
    <li/>
    `
};

const createAnkorTemplate = arr => arr.map(el=>createAnkor(el)).join('');

const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

const addClass = function(elem, className){
    return elem.classList.add(className);
};

const removeClass = function(elem, className){
    return elem.classList.remove(className);
};


const toggleClass = function(elem, className){
    return elem.classList.toggle(className);
};
addAnkorTemplate(createAnkorTemplate(ankorArr));

const onclickMenuBtn = (e) =>{
    toggleClass(ankorList,'is-hidden');
    
}

menuContainer.addEventListener('click', onclickMenuBtn);

