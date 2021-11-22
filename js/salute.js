// API getUser
// const user = {
//   firstName: 'Rodrigo',
//   lastName: 'Castro',
//   email: 'rodrcastro@gmail.com',
// };

// Functions

function sayHello(username) {
  // Conditions
  let salute = 'Boa tarde';
  const today = new Date();
  const hours = today.getHours();

  if (hours < 12 && hours > 6) {
    salute = 'Bom dia';
  } else if (hours > 18 || hours <= 6) {
    salute = 'Boa noite';
  }

  document.getElementById('salute').textContent = salute + " " + username;

  // document.querySelector('#salute').textContent = salute + " " + username;
}

// Events
const users = document.querySelectorAll('[data-user]');
// Pegando todos os itens com o atributo data-user dentro do DOM

//data-user no HTML pra criar um atributo específico

// Loops
users.forEach(function (element) {
  element.addEventListener('click', onUserClick);
  // Para cada elemento que for clicado, acionar a função onUserClick()
});

function onUserClick(event) {
  sayHello(event.target.textContent);
  // Função para dar trigger na função sayHello() com o texto dentro do target que foi clicado (nesse caso, o botão com o nome da pessoa)
 }