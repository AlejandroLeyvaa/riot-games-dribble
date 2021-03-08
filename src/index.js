import userIcon from './assets/user-icon.png';
import background from './assets/background_mobile.png';
import rifleImg from './assets/rifle.png';
import smgsImg from './assets/smgs.png';
import sidearmImg from './assets/sidearm.png';


import './styles/styles.css';

const imgElement = document.querySelector('#pattern');
const rifle = document.querySelector('#rifle');
const smgs = document.querySelector('#smgs');
const sidearm = document.querySelector('#sidearm');
const body = document.querySelector('body');
const hero = document.querySelector('.Hero-container');
const main = document.querySelector('.Main');
const backgroundPatternElement = document.querySelector('.Background-pattern');

const userContainerTemplate = `
  <figure class="Image-container">
    <img src="${userIcon}" alt="">
  </figure>
`;

window.addEventListener('load', insert);

function insert() {
  const userContainer = document.createElement('div');
  userContainer.classList.add('User-container');
  userContainer.innerHTML = userContainerTemplate;
  hero.append(userContainer);
  backgroundPatternElement.style.backgroundImage = `url('${background}')`;

  rifle.src = rifleImg;
  smgs.src = smgsImg;
  sidearm.src = sidearmImg;
};

