// TODO - Adicionar as setas
// TODO - Criar lógica para a seta para esquerda
// TODO - Criar lógica para click dos dots

document.querySelector('.slideshow__dots').addEventListener('click', onDotClick);

function onDotClick(event){
    const dotClicked = event.target.closest('.slideshow__dot');
    
    if(dotClicked){
        const index = Array.from(dotClicked.parentElement.children).indexOf(dotClicked);

        document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');
        dotClicked.classList.add('slideshow__dot--active');
        document.querySelector('.slideshow__item--active').classList.remove('slideshow__item--active');
        document.querySelector(`.slideshow__item:nth-child(${index+1})`).classList.add('slideshow__item--active');
    }
}


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

}

document.querySelector('.slideshow__arrows').addEventListener('click', onArrowClick);

function onArrowClick(event) {
  const arrowClicked = event.target;
  const currentSlide = document.querySelector('.slideshow__item--active');
  const next = currentSlide.nextElementSibling || currentSlide.parentElement.firstElementChild;
  const previous = currentSlide.previousElementSibling || currentSlide.parentElement.lastElementChild;
  const index = Array.from(next.parentElement.children).indexOf(next);

  if (arrowClicked.className === 'arrow__right') {
    currentSlide.classList.remove('slideshow__item--active');
    next.classList.add('slideshow__item--active');

    document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');
    document.querySelector(`.slideshow__dot:nth-child(${index + 1})`).classList.add('slideshow__dot--active');
    console.log(index);
  } else {
    currentSlide.classList.remove('slideshow__item--active');
    previous.classList.add('slideshow__item--active');
    document.querySelector('.slideshow__dot--active').classList.remove('slideshow__dot--active');
    document.querySelector(`.slideshow__dot:nth-child(${index - 1})`).classList.add('slideshow__dot--active');
    console.log(index);

  }
    // dotClicked.classList.add('.slideshow__dot')
    // document.querySelector('.slideshow__item--active').classList.remove('slideshow__item--active');
    // document.querySelector(`.slideshow__item:nth-child(${index+1})`).classList.add('slideshow__item--active');
  }



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
//setTimeout(nextSlide, 5000);
// setInterval(nextSlide, 5000);


