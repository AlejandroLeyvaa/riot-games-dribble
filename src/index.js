import userIcon from './assets/user-icon.png';
import background from './assets/background.png';

import './styles/styles.css';

let state = {
  scrolling: false,
}

const imgElement = document.querySelector('#pattern');
const body = document.querySelector('body');
const hero = document.querySelector('.Hero-container');
// const backgroundPatternElement = document.querySelector('.Background-pattern');

const userContainerTemplate = `
  <figure class="Image-container">
    <img src="${userIcon}" alt="">
  </figure>
`;

window.addEventListener('load', insertTemplates);

function insertTemplates() {
  const userContainer = document.createElement('div');
  userContainer.classList.add('User-container');
  userContainer.innerHTML = userContainerTemplate;
  hero.append(userContainer);

  body.style.backgroundImage = `url('${background}')`
};

