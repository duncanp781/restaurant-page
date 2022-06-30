import Logo from './logo.jpg';

const homepage = () => {
  const page = document.createElement('div');
  page.classList.add('homepage');
  page.classList.add('page');

  const head = document.createElement('header');
  head.textContent = 'Mama mia, welcome to our restaurant!';

  const logo = new Image();
  logo.src = Logo;

  page.appendChild(head);
  page.appendChild(logo);
  return page;
}

export {homepage};