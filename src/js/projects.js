// / Import Swiper and modules
// import Swiper from 'swiper';
// import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// // Now you can use Swiper
// const swiperProlects = new Swiper('.swiper', {
//   // Install modules
//   modules: [Navigation, Pagination, Scrollbar],
//   speed: 500,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // ...
// });
// // console.log(Swiper);


// const swiper = new Swiper('.swiper-container', {
//     loop: true, // Циклический слайдер (он будет повторяться)
//     slidesPerView: 1, // Количество слайдов на одном экране
//     navigation: {
//       nextEl: '.button-right-proj', // Кнопка "вправо"
//       prevEl: '.button-left-proj',  // Кнопка "влево"
//     },
//     // Дополнительные настройки (например, скорость переключения)
//     speed: 500,  // Скорость переключения слайдов
//   });




const projectsArr = [
    {
        projectName:'Programming Across Borders: Ideas, Technologies, Innovations',
        img:'../img/imgJPEG/projectImg/projectImg1.jpg'
    },
    // {
    //     projectName:'Programming Across Borders: Ideas, Technologies, Innovations',
    //     img:'../img/imgJPEG/projectImg/projectImg2.jpg'
    // },
    // {
    //     projectName:'Programming Across Borders: Ideas, Technologies, Innovations',
    //     img:'../img/imgJPEG/projectImg/projectImg3.jpg'
    // }
];

const projectList = document.querySelector('.projects-list');

const createProjectEl = obj =>{
    return`
    <div class='project-link-container'>
        <div class='proj-link-container'>
            <ul class='skill-proj-list'>
                <li class = 'skill-proj-link'>#react</li>
                <li class = 'skill-proj-link'>#js</li>
                <li class = 'skill-proj-link'>#node.js</li>
                <li class = 'skill-proj-link'>#git</li>
            </ul>
            <p class='project-name-p'>${obj.projectName}</p>
            <button class='send-button-proj'>Send project</button>
        </div>
        <div class='project-image-link-cont'>
            <img class = 'project-image'src="${obj.img}" alt="${obj.projectName}">
        </div>
    </div>
    `
};

const createProjectTemplate = arr => arr.map(el=>createProjectEl(el)).join('');

const addProjctTemplate = template => projectList.insertAdjacentHTML('beforeend', template);


addProjctTemplate(createProjectTemplate(projectsArr));
