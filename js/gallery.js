const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onGalleryClick);

// Buscando a altura da imagem grande
const imageHeight = document.querySelector('.gallery__image').offsetHeight;

// Forçar altura da div pai com o tamanho da imagem
document.querySelector('.gallery__images').style.height = `${imageHeight}px`;

function onGalleryClick(event) {
  // Quero perceber se os clicks foram no link do closest que vai gerir isso
  const target = event.target.closest('.gallery__link');
  if(target) {
    // Adicionamos método que previne que um link tenha o comportamento padrão (abrir tab em branco)
    event.preventDefault();
    
    // Clicou em mim > Vai ao meu elemento pai, vê quantos itens tem e retorna isso em um Array > Me diz qual é a minha posição nesse Array
    const index = Array.from(target.parentNode.children).indexOf(target);

    document.querySelector('.gallery__scroll').style.transform = `translateY(${imageHeight * index * -1}px)`;
  }
}

