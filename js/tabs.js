const tabs = document.querySelector('.tabs');
tabs.addEventListener('click', onTabsClick);

function onTabsClick(event) {
  if(event.target.hasAttribute('data-tab-button')) {
    // remove active class from tab and content
    tabs.querySelector('.tabs__option--active')?.classList.remove('tabs__option--active');
    tabs.querySelector('.tabs__content--active')?.classList.remove('tabs__content--active');
    // interrogação adiciona um novo "if" para validar se o resultado anterior a ele for válido

    // add active class to clicked element
    event.target.classList.add('tabs__option--active');

    // get related tab content
    const contentID = event.target.getAttribute('data-tab-button');
    tabs.querySelector(`[data-tab-content="${contentID}"]`)?.classList.add('tabs__content--active');    

    // Modo antigo de fazer: tabs.querySelector('[data-tab-content="' + contentID + '"]);
  }
}