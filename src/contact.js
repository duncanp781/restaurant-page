


function contact(){
  const content = document.createElement('div');
  content.classList.add('contact');
  content.classList.add('page');

  const header = document.createElement('h1');
  header.textContent = 'Contact Us';

  const text = document.createElement('p');
  text.textContent = 'You can reach us at the following coordinates: N:0.1678888324, W: 31.24326421';

  content.appendChild(header);
  content.appendChild(text);

  return content;
}


export {contact}