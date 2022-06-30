import gabagool from './gabagool.jpeg';
import bakedziti from './bakedziti.jpg';

function menu() {
  const content= document.createElement('div');
  content.classList.add('menu');
  content.classList.add('page');

  const header = document.createElement('h1');
  header.textContent = 'Our Menu';

  let gaba = menuItem('Gabagool', "It's gabagool, what more could you want", 14.99, gabagool);

  let ziti = menuItem('Baked Ziti', "You've gotta try my wifes baked ziti. It's the best, I'm telling you.", 13.29, bakedziti);

  content.appendChild(header);
  content.appendChild(gaba);
  content.appendChild(ziti);

  return content;
}

function menuItem(name, desc, price, image = null){
  const item = document.createElement('div');
  item.classList.add('menu-item');

  const itemName = document.createElement('div');
  itemName.classList.add('item-name');
  itemName.textContent = name;

  const itemDesc = document.createElement('div');
  itemDesc.classList.add('item-desc');
  itemDesc.textContent = desc;

  const itemPrice = document.createElement('div');
  itemPrice.classList.add('item-price');
  itemPrice.textContent = `$${price}`;


  const itemImage = new Image();
  itemImage.classList.add('item-image');
  itemImage.src = image;

  item.appendChild(itemName);
  item.appendChild(itemDesc);
  item.appendChild(itemPrice);
  item.appendChild(itemImage);

  return item;
}

export {menu}