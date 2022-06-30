
import { homepage } from './homepage.js';
import {menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';


let currentDisplay = homepage();

const logo = document.createElement('div');
logo.textContent = 'Welcome to our Restaurant!';
logo.classList.add('logo');


const tabArea = document.createElement('div');
tabArea.classList.add('tabs');

const mainButton = document.createElement('button');
mainButton.setAttribute('id', 'main');
mainButton.textContent = 'Home';
mainButton.addEventListener('click', () => switchTo(homepage(), mainButton));


const menuButton = document.createElement('button');
menuButton.setAttribute('id', 'menu');
menuButton.textContent = 'Menu';
menuButton.addEventListener('click', () => switchTo(menu(), menuButton));

const contactButton = document.createElement('button');
contactButton.setAttribute('id', 'contact');
contactButton.textContent = 'Contact';
contactButton.addEventListener('click', () => switchTo(contact(), contactButton));

tabArea.appendChild(mainButton);
tabArea.appendChild(menuButton);
tabArea.appendChild(contactButton);

const pageContainer = document.createElement('div');
pageContainer.classList.add('page-container');

let selected = mainButton;
selected.classList.add('selected');


document.body.appendChild(logo);
document.body.appendChild(tabArea);
document.body.appendChild(pageContainer)
pageContainer.appendChild(currentDisplay);

function switchTo(page, button){
  if(currentDisplay != page){
    currentDisplay.remove();
    currentDisplay = page;
    pageContainer.appendChild(currentDisplay);

    selected.classList.remove('selected');
    selected = button;
    selected.classList.add('selected');
  }
  
}

