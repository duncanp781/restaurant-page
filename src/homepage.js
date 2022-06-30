import Logo from './logo.jpg';

const homepage = () => {
  const page = document.createElement('div');
  page.classList.add('homepage');
  page.classList.add('page');

  const head = document.createElement('h1');
  head.textContent = 'Who are we?';

  const content = document.createElement('p');
  content.textContent = "We're the pizza guys. The gabagool guys. The guys you can trust. The guys that have your back. Count on us. Buy our food."
  const logo = new Image();
  logo.setAttribute('id' , 'logo-image');
  logo.src = Logo;

  page.appendChild(head);
  page.appendChild(content);
  page.appendChild(logo);
  return page;
}

export {homepage};