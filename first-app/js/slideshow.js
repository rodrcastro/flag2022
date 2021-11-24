// TODO: Definir intervalo para slideshow voltar a rodar automaticamente depois da interação do usuário

/* 
Perguntas:
- Quando percebi que ia utilizar novamente muito da lógica anterior, tentei tirar as consts de dentro da function nextSlide pra poder usá-las globalmente, mas quebrou a funcionalidade de rodar os slides automaticamente. Por quê?
  - Não serve de muito - sempre vão ser distintas chamadas e vários valores diferentes sempre, então tanto faz se isto está dentro da function, uma vez que ela vai ser chamada
  - Funcionaria, mas pelo que está acima, não valeria a pena
- Não consegui colocar setas de verdade nos botões esquerda e direita
*/

// let currentSlide = 0;

function changeSlide(currentSlide, element) {
  // Removemos a classe do Slideshow ativo
  currentSlide.classList.remove('slideshow__item--active');

  // Removemos a classe do Dot Ativo
  document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');

  // Adicionamos a classe ativa para o slide atual
  element.classList.add('slideshow__item--active');
  const index = Array.from(element.parentElement.children).indexOf(element);

  // Adicionamos a classe ativa para o Dot do index correto
  document.querySelector(`.slideshow__dot:nth-child(${index + 1})`).classList.add('slideshow__dot--active');

}

function prevSlide() {
  const currentSlide = document.querySelector('.slideshow__item--active');
  const prev = currentSlide.previousElementSibling || currentSlide.parentElement.lastElementChild;
  changeSlide(currentSlide, prev);
}

function nextSlide() {
  const currentSlide = document.querySelector('.slideshow__item--active');
  const next = currentSlide.nextElementSibling || currentSlide.parentElement.firstElementChild;
  changeSlide(currentSlide, next);
}


function onDotClick(event){
  /* Feito em Aula:
   const { target } = event; - destructuring
   if(target.classList.contains('slideshow__dot')) {
      const index = Array.from(target.parentElement.children).indexOf(target);
      const currentSlide = document.querySelector('.slideshow__item--active');
      const next = document.querySelector(`.slideshow__item:nth-child(${index + 1})`)

      changeSlide(currentSlide, next);
  }

*/

  const dotClicked = event.target.closest('.slideshow__dot');
   if(dotClicked){
      const index = Array.from(dotClicked.parentElement.children).indexOf(dotClicked);
      document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');
      dotClicked.classList.add('slideshow__dot--active');
      document.querySelector('.slideshow__item--active').classList.remove('slideshow__item--active');
      document.querySelector(`.slideshow__item:nth-child(${index+1})`).classList.add('slideshow__item--active');
      clearInterval(play);
    }
}

document.querySelector('.slideshow__dots').addEventListener('click', onDotClick);

function onKeypress(event) {
  if(event.code === 'ArrowLeft') {
    clearInterval(play);
    prevSlide();
  } else if(event.code === 'ArrowRight') {
    clearInterval(play);
    nextSlide();
  }
}

window.addEventListener('keyup', onKeypress);

function onArrowClick(event) {
  clearInterval(play);
  const arrowClicked = event.target;
  // const currentSlide = document.querySelector('.slideshow__item--active');
  // const next = currentSlide.nextElementSibling || currentSlide.parentElement.firstElementChild;
  // const index = Array.from(next.parentElement.children).indexOf(next);
  // const previous = currentSlide.previousElementSibling || currentSlide.parentElement.lastElementChild;
  // const previousIndex = Array.from(previous.parentElement.children).indexOf(previous);

  if (arrowClicked.className === 'arrow__right') {
    nextSlide();
    // Retirado código abaixo por conta da função nextSlide()
    // currentSlide.classList.remove('slideshow__item--active');
    // next.classList.add('slideshow__item--active');
    // document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');
    // document.querySelector(`.slideshow__dot:nth-child(${index + 1})`).classList.add('slideshow__dot--active');

  } else {
    prevSlide();
    // Retirado código abaixo por conta da função prevSlide()
    // currentSlide.classList.remove('slideshow__item--active');
    // previous.classList.add('slideshow__item--active');
    // document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');
    // document.querySelector(`.slideshow__dot:nth-child(${previousIndex + 1})`).classList.add('slideshow__dot--active');
  }
}

document.querySelector('.slideshow__arrows').addEventListener('click', onArrowClick);


  // const currentDot = document.querySelector('.slideshow__dot--active'); - Necessário apenas no método comentado
 // Outra forma de fazer o mesmo processo abaixo (retira os ifs)
  // Retira o class desse slide
  // currentSlide.classList.remove('slideshow__item--active');
  // currentDot.classList.remove('slideshow__dot--active');

  // Se o item que estiver ativo tiver um irmão, adiciona a classe de active
  // if(currentSlide.nextElementSibling) {
  //   currentSlide.nextElementSibling.classList.add('slideshow__item--active');
  //   currentDot.nextElementSibling.classList.add('slideshow__dot--active')

  // Se não tiver um irmão, busca o primeiro item para mostrar esse
  // } else {
  //   currentSlide.parentElement.firstElementChild.classList.add('slideshow__item--active');
  //   currentDot.parentElement.firstElementChild.classList.add('slideshow__dot--active');
  // }
//setTimeout(nextSlide, 5000);
let play = setInterval(nextSlide, 5000);


