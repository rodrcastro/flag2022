// TODO: Adicionar novas "datas" e colocar elas "hidden" debaixo do header
// TODO: 
// TODO: Adicionar localStorage e a info de read quando fechada uma notification

import './notifications.scss';
import '../notification/notification'

// Simular guardar vários valores iguais, criamos um array de objetos
const data = [
  {
    title: 'Email updates',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    read: false
  },
  {
    title: 'Email updates',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    read: false
  },
  {
    title: 'Email updates',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    read: false
  },
  {
    title: 'Email updates',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    read: false
  },
];

// for loop tradicional
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i].title, i);
// }

function createNotification(info) {
  const notification = document.createElement('article');
  notification.classList.add('notification');

  const header = document.createElement('header');
  header.classList.add('notification__header');  

  const title = document.createElement('h3');
  title.classList.add('notification__title');
  title.textContent = info.title;

  const button = document.createElement('button');
  button.classList.add('notification__close')
  button.innerHTML = '<span class="material-icons">close</span>'
  button.addEventListener('click', onNotificationClose);

  const content = document.createElement('div');
  content.classList.add('notification__content');
  content.innerHTML = `
    <p>${info.subtitle}</p>
    <p><a href="${info.link}">${info.cta}</a></p>`;


  header.append(title, button);
  notification.append(header, content);

  document.querySelector('.notifications__container').append(notification);
}

function onNotificationClose(event) {
  const notification = event.target.closest('.notification');
  notification.remove();
  
  localStorage.setItem('read', true);
}

for (let notification of data) {
  createNotification(notification);
}

/*
<article class="notification">
  <header class="notification__header">
    <h3 class="notification__title">Isto é uma notificação</h3>
    <button class="notification__close">
      <span class="material-icons">close</span>
    </button>
  </header>
  <div class="notification__content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque fugiat, exercitationem ullam assumenda quibusdam.</p>
    <p><a href="#nowhere">Receive updates</a></p>
  </div>
</article>
*/