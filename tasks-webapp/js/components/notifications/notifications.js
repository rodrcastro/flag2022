// TODO: Adicionar wrap no número de notificações (se for mais do que 3, criar scroll
// TODO: Adicionar opção de clicar fora do ícone e fechar as notificações na mesma

import './notifications.scss';
import '../notification/notification'

// Simular guardar vários valores iguais, criamos um array de objetos
const staticData = [
  {
    id: 1,
    title: 'Email updates 1',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    isRead: false
  },
  {
    id: 2,
    title: 'Email updates 2',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    isRead: false
  },
  {
    id: 3,
    title: 'Email updates 3',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    isRead: false
  },
  {
    id: 4,
    title: 'Email updates 4',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    isRead: false
  },
  {
    id: 5,
    title: 'Email updates 5',
    subtitle: 'Do you want to receive product updates once a month via our newsletter?',
    link: '#nowhere',
    cta: 'Receive updates',
    isRead: false
  },
];

// for loop tradicional
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i].title, i);
// }

function createNotification(info) {
  const notification = document.createElement('article');
  notification.classList.add('notification');
  notification.setAttribute('data-id', info.id);

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
  const element = event.target.closest('.notification');
  const item = data.find(el => el.id == element.getAttribute('data-id'));
  if(item) {
    item.isRead = true;
    element.remove();
    updateNotificationsStorage();
  }

}

function updateNotificationsStorage() {
  localStorage.setItem('notifications', JSON.stringify(data));
  updateNotificationsCount()
}

function clearNotifications() {
  for (let notification of data) {
    notification.isRead = true;
    document.querySelector('.notifications__container').innerHTML = '';
  }
  updateNotificationsStorage();
  updateNotificationsCount()
}

function toggleNotifications() {
  document.querySelector('.notifications').classList.toggle('notifications--show');
}

// Update notifications badge number
function updateNotificationsCount() {
  const count = document.querySelector('.notifications__container').children.length;
  const element = document.querySelector('.header__new-notifications');
  element.textContent = count;
  element.style.display = (count > 0) ? 'flex' : 'none';
  // (condição) ? se for true, faça o que está aqui aqui : else faça isso aqui;
}

const data = JSON.parse(localStorage.getItem('notifications')) || staticData;

for (let notification of data) {
  if(!notification.isRead) {
    createNotification(notification);
  }
}

updateNotificationsCount();

// Clear All notifications event
document.querySelector('.notifications__clear').addEventListener('click', clearNotifications)

// Toggle notifications container hide/show 
document.querySelector('.header__notify').addEventListener('click', toggleNotifications);
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