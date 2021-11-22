const accordion = document.querySelector('[data-js="accordion"]');
accordion.addEventListener('click', onAccordionClick);

function onAccordionClick(event) {
    const element = event.target.closest('.accordion__header');
    if (element) {
       const activeElement = document.querySelector(".accordion__article--open");
       if(activeElement){
        activeElement.classList.remove("accordion__article--open");
       }
       const parent = element.parentElement;
       if (parent !== activeElement){
        parent.classList.add('accordion__article--open');
       }        
    }
}

function setAccordionContentHeight() {
  const elements = document.querySelectorAll('.accordion__content > div');
  elements.forEach(function (element) {
    element.parentElement.style.setProperty('--item-height', (element.offsetHeight + 32) + 'px');
  });
}

window.addEventListener('resize', setAccordionContentHeight);

setAccordionContentHeight();