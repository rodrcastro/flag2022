// TODO - Adicionar as setas
// TODO - Criar lógica para a seta para esquerda
// TODO - Criar lógica para click dos dots



function nextSlide() {
  // Buscar primeiro qual slide é que está ativo
//  const currentDot = document.querySelector('.slideshow__dot--active'); - Necessário apenas no método comentado
  const currentSlide = document.querySelector('.slideshow__item--active');


 // Outra forma de fazer o mesmo processo abaixo (retira os ifs)
  currentSlide.classList.remove('slideshow__item--active');


  const next = currentSlide.nextElementSibling || currentSlide.parentElement.firstElementChild;

  next.classList.add('slideshow__item--active');


  const index = Array.from(next.parentElement.children).indexOf(next);

  document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');

  document.querySelector(`.slideshow__dot:nth-child(${index + 1})`).classList.add('slideshow__dot--active');
  

  // // Retira o class desse slide
  // currentSlide.classList.remove('slideshow__item--active');
  // currentDot.classList.remove('slideshow__dot--active');

  // // Se o item que estiver ativo tiver um irmão, adiciona a classe de active
  // if(currentSlide.nextElementSibling) {
  //   currentSlide.nextElementSibling.classList.add('slideshow__item--active');
  //   currentDot.nextElementSibling.classList.add('slideshow__dot--active')

  // // Se não tiver um irmão, busca o primeiro item para mostrar esse
  // } else {
  //   currentSlide.parentElement.firstElementChild.classList.add('slideshow__item--active');
  //   currentDot.parentElement.firstElementChild.classList.add('slideshow__dot--active');
  // }

}

//setTimeout(nextSlide, 5000);
setInterval(nextSlide, 1000);


