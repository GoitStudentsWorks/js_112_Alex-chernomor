import projectImgOne from '../img/imgJPEG/projectImg/projectImg1.jpg';
import projectImgTwo from  '../img/imgJPEG/projectImg/projectImg2.jpg';
import projectImgThree from '../img/imgJPEG/projectImg/projectImg3.jpg';
import pathBtn from '../img/imgSVG/sprite.svg';
const projectsArr = [
  {
    projectName: 'Programming Across Borders: Ideas, Technologies, Innovations',
    img: projectImgOne,
  },
  {
    projectName: `Programming Across Borders: Ideas, Technologies, Innovations`,
    img: projectImgTwo,
  },
  {
    projectName: 'Programming Across Borders: Ideas, Technologies, Innovations',
    img: projectImgThree,
  },
];
const projectList = document.querySelector('.projects-list');
const createProjectEl = obj => {
  return `
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
    `;
};
const createProjectTemplate = arr =>
  arr.map(el => createProjectEl(el)).join('');
const addProjectTemplate = template =>
  projectList.insertAdjacentHTML('beforeend', template);
addProjectTemplate(createProjectTemplate(projectsArr));

const rightButnnProj = document.querySelector('.right-arrow-prjct');
const leftButnnProj = document.querySelector('.left-arrow-prjct');

leftButnnProj.setAttribute('href', `${pathBtn}#arrowLeft`);
rightButnnProj.setAttribute('href', `${pathBtn}#arrowRight`);
