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

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const buttonList = document.createElement('ul');
buttonList.classList.add('buttons-list');

const prevBtn = document.createElement('button');
prevBtn.classList.add('button-left-proj');
prevBtn.innerHTML = `<svg width='40px' height='40px'><use href='${pathBtn}#arrowLeft'></use></svg>`;

buttonContainer.appendChild(prevBtn);
buttonContainer.appendChild(buttonList);
const nextBtn = document.createElement('button');
nextBtn.classList.add('button-right-proj');
nextBtn.innerHTML = `<svg width='40px' height='40px'><use href='${pathBtn}#arrowRight'></use></svg>`;

buttonContainer.appendChild(nextBtn);
buttonContainer.appendChild(buttonList);
document.querySelector('.project-container').appendChild(buttonContainer);
const addProjectTemplate = template =>
  projectList.insertAdjacentHTML('beforeend', template);
addProjectTemplate(createProjectTemplate(projectsArr));
