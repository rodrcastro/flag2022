import './clients.scss';
import '../client/client';

/*
Passos a seguir:
- Perde o atributo de disabled quando algo estiver digitado no input
- Adicionar a um array de clients vazio o client que foi digitado no input
- Ao clicar em add, criar o HTML do cliente
*/

/*
- Criar funcionalidade de delete e edit

- Devo saber qual é o item que estou clicando (sempre lembrar de tirar um item do array que vou buscar pq tem o "p" do Name)

// *DELETE
//- Deve apagar o element
//- Apagar o elemento do array
//- Guardar no storage do array

* *EDIT
//- Remove o atributo do input
//- Ao sair do input (blur, quando perde o foco) atualizar o valor no array
// - Atualizar o storage
//- Botar o readonly de novo
*/

// Evento do keyup no formulário com client name (onde tem o botão "add" ao lado para ele reduzir a opacidade)
const inputClient = document.querySelector('[name="create_client"]')
// Evento para adicionar um novo cliente
const addClient = document.querySelector('.clients__add')
const createForm = document.querySelector('.clients__create');
// Cria primeiro os clients vazio se não tiver nada no local storage
const clients = JSON.parse(localStorage.getItem('clients')) || [];

// Input para deletar/editar um item

let countId = 0;


function create(name) {
  // Temporário, o ID deve ser gerenciado pela base de dados/API
  countId++
  const client = document.createElement('div');
  client.classList.add('client');
  
  const title = document.createElement('input');
  title.classList.add('client__title');
  title.setAttribute('type', 'text');
  title.setAttribute('readonly', '');
  title.setAttribute('value', name);
  title.setAttribute('name', `client_${countId}`);
  
  const editButton = document.createElement('button');
  editButton.classList.add('client__edit');
  editButton.innerHTML = '<span class="material-icons">create</span>';
  editButton.addEventListener('click', onEdit);
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('client__delete');
  deleteButton.innerHTML = '<span class="material-icons">delete</span>';
  deleteButton.addEventListener('click', onDelete);

  client.append(title, editButton, deleteButton)

  document.querySelector('.clients__container').append(client);

}

function onAdd(event) {
  event.preventDefault();
  create(inputClient.value)
  clients.push(inputClient.value);
  updateStorage();
  inputClient.value = '';
}

function updateStorage() {
  localStorage.setItem('clients', JSON.stringify(clients));
}

function onKeyUp() {
  // Quando a string tá vazia = false, ou seja, não preciso usar inputClient.value.length
  // Quando .length = 0, ele é falso
  if(inputClient.value) {
    addClient.removeAttribute('disabled');
  } else {
    addClient.setAttribute('disabled', '');
  }
}

function onDelete(event) {
  // Identificar qual o target da ação
  const element = event.target.closest('.client');

  // Identificar qual o ID do client que eu cliquei
  const inputTitle = element.querySelector('.client__title');
  const item = clients.indexOf(inputTitle.value);

  // Apagar elemento do Array
  clients.splice(item, 1);

  // Update localstorage
  updateStorage();

  // Remover elemento da página
  element.remove();
   
}

function onEdit(event) {
  // Identificar qual o target da ação
  const element = event.target.closest('.client');
  
  // Identificar qual o input/title do client que eu cliquei
  const inputTitle = element.querySelector('.client__title');
  
  // Remover o atributo readonly para tornar o item editável
  inputTitle.removeAttribute('readonly');

  // Determino length do nome do cliente
  let titleLength = inputTitle.value.length
  // Adiciono foco no input
  inputTitle.focus();
  // Coloco o cursor quando em modo focus no final do input
  inputTitle.setSelectionRange(titleLength, titleLength);

  // Crio index dos clients a partir do valor do nome no input
  const item = clients.indexOf(inputTitle.value);

  // Identifico quando o campo input fica com blur
  inputTitle.addEventListener('blur', function () {
    // Adiciono o item editado ao array existente
    clients[item] = inputTitle.value;
    // Atualizo o valor do localStorage a partir do array novo
    updateStorage();
    // Adiciono novamente o atributo readonly
    inputTitle.setAttribute('readonly', '')
  })

}
// Evento do keyup no formulário com client name (onde tem o botão "add" ao lado para ele reduzir a opacidade)
inputClient.addEventListener('keyup', onKeyUp);

// Evento para adicionar um novo cliente
createForm.addEventListener('submit', onAdd);

// For loop para criar os clients guardados
for (const item of clients) {
   create(item);
 }
























  // <div class="client">
  //<input
  //               type="text"
  //               class="client__title"
  //               value="Others"
  //               name="client_1"
  //               readonly
  //             />
  //<button class="client__edit">
  //<span class="material-icons">create</span>
  //</button>
  //<button class="client__delete">
  //<span class="material-icons">delete</span>
  //</button>
  //</div>