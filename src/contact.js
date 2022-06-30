


function contact(){
  const content = document.createElement('div');
  content.classList.add('contact');
  content.classList.add('page');

  const header = document.createElement('h1');
  header.textContent = 'Contact Us';

  const text = document.createElement('p');
  text.textContent = 'You can reach us at the following coordinates: 37.2431° N, 115.7930° W';

  content.appendChild(header);
  content.appendChild(text);

  return content;
}


export {contact}