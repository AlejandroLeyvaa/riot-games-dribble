import userIcon from './assets/user-icon.png';
import background from './assets/background.png';

import './styles/styles.css';

const userContainerTemplate = `
  <figure class="Image-container">
    <img src="${userIcon}" alt="">
  </figure>
`;

window.addEventListener('load', insertTemplates);

function insertTemplates() {
  const hero = document.querySelector('.Hero-container');
  const backgroundPatternElement = document.querySelector('.Background-pattern');
  const imgElement = document.querySelector('#pattern');
  const userContainer = document.createElement('div');
  userContainer.classList.add('User-container');
  userContainer.innerHTML = userContainerTemplate;
  hero.append(userContainer);

  imgElement.src = background;
};