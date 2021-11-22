// Overlays/Pop-up/Modals
const cookieBar = document.querySelectorAll('button.cookies-bar__confirm, button.cookies-bar__close');
cookieBar.forEach(function(element){
  element.addEventListener('click', onCookieClick)
});

if (!localStorage.getItem('showedCookiesBar')) {
  document.querySelector('.cookies-bar').classList.add('cookies-bar--show');
}

function onCookieClick(event) {
  localStorage.setItem('showedCookiesBar', true);
  document.querySelector('.cookies-bar').classList.remove('cookies-bar--show');
}