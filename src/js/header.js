const ankorList = document.querySelector('.ankors-menu');
const menuButton = document.querySelector('.menu-button');


const ankorArr = ['About me','Benefits','Projects','FAQ'];

const createAnkor = str =>{
    return`
    <li>
    <a>${str}<a/>
    <li/>
    `
};

const createAnkorTemplate = arr => arr.map(el=>createAnkor(el)).join('');

const addAnkorTemplate = template => ankorList.insertAdjacentHTML('beforeend', template);

const addClass = function(elem, className){
    return elem.classList.add(className)
};

const removeClass = function(elem, className){
    return elem.classList.remove(className)
};


const toggleClass = function(elem, className){
    return elem.classList.toggle(className)
};
addAnkorTemplate(createAnkorTemplate(ankorArr));

menuButton.addEventListener('click', (e)=>{

    toggleClass(ankorList,'is-hidden');
    
})
