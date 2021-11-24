import { tns } from "../node_modules/tiny-slider/src/tiny-slider"
import './accordion';
import './tabs';
import './cookies';
import './gallery';
import './slideshow';

// Tiny Slider
const slider = tns({
  container: '.tiny-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true
});

// Filters
// Forms Validations


// Back to top / Scroll à la Zomato
window.addEventListener('scroll', onScroll);

function onScroll(event) {
  // Busco qual é o scroll
  const scroll = window.scrollY;
  // Calculo o offset do tamanho do body do documento com a janela (viewport) para saber o quanto scrollei
  const offset = document.body.clientHeight - window.innerHeight;
  // Calculo o valor do offset em porcentagem
  const per = Math.floor(scroll * 100 / offset);
  
  // top bar width
  document.querySelector('.top-scroll-bar').style.width = per + '%';
  // Transform scale-x funciona também

  // Mostrar ou esconder o back to top
  // Se for maior que 50% da página scrollada, aparecer o botão back to top
  const btnBack = document.querySelector('.back-to-top');
  if (per > 50) {
      btnBack.classList.add('back-to-top--show')
  } else {
      btnBack.classList.remove('back-to-top--show')
  }

  // Outra forma de fazer
  // document.querySelector('.back-to-top').classList.toggle('back-to-top--show', per >= 50);
}



// Countdown
// Animations on Scroll
// Plugins integration