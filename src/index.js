import userIcon from './assets/user-icon.png';
import background from './assets/background_mobile.png';
import rifleImg from './assets/rifle.png';
import smgsImg from './assets/smgs.png';
import sidearmImg from './assets/sidearm.png';
import gameplay from './assets/VALORANT_JETT.mp4';

import './styles/styles.css';
import './styles/tablet.css';
import './styles/desktop.css';

const imgElement = document.querySelector('#pattern');
const rifle = document.querySelector('#rifle');
const smgs = document.querySelector('#smgs');
const sidearm = document.querySelector('#sidearm');
const body = document.querySelector('body');
const hero = document.querySelector('.Hero-container');
const main = document.querySelector('.Main');
const video = document.querySelector('video');
const backgroundPatternElement = document.querySelector('.Background-pattern');

const userContainerTemplate = `
  <figure class="Image-container">
    <img src="${userIcon}" alt="">
  </figure>
`;

window.addEventListener('load', insert);
function insert(e) {
  console.log(e);
  const userContainer = document.createElement('div');
  userContainer.classList.add('User-container');
  userContainer.innerHTML = userContainerTemplate;
  hero.append(userContainer);
  backgroundPatternElement.style.backgroundImage = `url('${background}')`;

  video.src = gameplay;
  rifle.src = rifleImg;
  smgs.src = smgsImg;
  sidearm.src = sidearmImg;
};

video.muted = true;
video.autoplay = true;