import './clients.scss';
import '../client/client';

// * Dever de casa
// * DONE: Botão que aparece quando um item está archived pra dar reload e voltar a estar active
// * DONE: Botão tem que sumir depois que ele volta a ser active

// Evento do keyup no formulário com client name (onde tem o botão "add" ao lado para ele reduzir a opacidade)
const inputClient = document.querySelector('[name="create_client"]')

const inputSearch = document.querySelector('[name="clients_search"]');

// Evento para adicionar um novo cliente
const addClient = document.querySelector('.clients__add')
const createForm = document.querySelector('.clients__create');

const currentStatus = document.querySelector('[name="clients_filter"]')

// Cria primeiro os clients vazio se não tiver nada no local storage
const clients = JSON.parse(localStorage.getItem('clients')) || [];

// Input para deletar/editar um item

let countId = 0;


function create(name, status = 'active') {
  // Temporário, o ID deve ser gerenciado pela base de dados/API
  countId++
  const client = document.createElement('div');
  client.classList.add('client');

  // Aula 03/12, info adicionada no client (id do client criado)
  client.setAttribute('data-id', countId);
  client.setAttribute('data-status', status);
  
  const title = document.createElement('input');
  title.classList.add('client__title');
  title.setAttribute('type', 'text');
  title.setAttribute('readonly', '');
  title.setAttribute('value', name);
  title.setAttribute('name', `client_${countId}`);
  //title.addEventListener('blur', onInputBlur);
  
  const editButton = document.createElement('button');
  editButton.classList.add('client__edit');
  editButton.innerHTML = '<span class="material-icons">create</span>';
  editButton.addEventListener('click', onEdit);
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('client__delete');
  deleteButton.innerHTML = '<span class="material-icons">delete</span>';
  deleteButton.addEventListener('click', onStatusToggle);

  const restoreButton = document.createElement('button');
  restoreButton.classList.add('client__restore');
  restoreButton.innerHTML = '<span class="material-icons">restore</span>';
  restoreButton.addEventListener('click', onStatusToggle);

  client.append(title, editButton, deleteButton, restoreButton);

  document.querySelector('.clients__container').append(client);

  // Aula 03/12, damos retorno do countId
  return countId;
}

function onAdd(event) {
  event.preventDefault();
  const clientId = create(inputClient.value);

  clients.push({
    id: clientId,
    name: inputClient.value,
    isActive: true
  });

  updateStorage();
  inputClient.value = '';
  
}

function onStatusChange(event) {
  document.querySelector('.clients__container').setAttribute('data-status', currentStatus.value);
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

function onEdit(event) {
  // Minha solução abaixo
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
  //const item = clients.indexOf(inputTitle.value);
  const item = clients.find(item => item.id == element.getAttribute('data-id'));

  // Identifico quando o campo input fica com blur
  inputTitle.addEventListener('blur', function () {
    // Adiciono o item editado ao array existente
    item.name = inputTitle.value;
    // Atualizo o valor do localStorage a partir do array novo
    updateStorage();
    // Adiciono novamente o atributo readonly
    inputTitle.setAttribute('readonly', '')
  })
}

function onStatusToggle(event) {
  const element = event.target.closest('.client');
  const item = clients.find(item => item.id == element.getAttribute('data-id'));

  if (element.getAttribute('data-status') == 'active') {
    element.setAttribute('data-status', 'archived');
    item.isActive = false;
  } else {
    element.setAttribute('data-status', 'active');
    item.isActive = true;
  }

  updateStorage();
}

function onSearch(event) {
  const term = event.target.value;
  document.querySelectorAll('.client').forEach(client => {
    const input = client.querySelector('.client__title');
    if (input.value.toLowerCase().includes(term.toLowerCase())) {
      client.removeAttribute('data-search-hide');
    } else {
      client.setAttribute('data-search-hide', '');
    }
  });
}

// Evento de keyup no search filter
inputSearch.addEventListener('keyup', onSearch);
inputSearch.addEventListener('search', onSearch);

// Evento do keyup no formulário com client name (onde tem o botão "add" ao lado para ele reduzir a opacidade)
inputClient.addEventListener('keyup', onKeyUp);

// Evento para adicionar um novo cliente
createForm.addEventListener('submit', onAdd);

// Evento para verificar o status do filtro
currentStatus.addEventListener("change", onStatusChange)

// For loop para criar os clients guardados
for (const item of clients) {
   create(item.name, (item.isActive) ? 'active' : 'archived');
 }

// TODO: Retirar o edit quando o client está archived
// TODO: Quando o client estiver archived, mudar o botão de edit para deletar




















/* Function abaixo substituída por onStatusToggle()
function onDelete(event) {
   * Solução feita em sala
   * Adicionamos um ID para cada entrada do Array, então essencialmente muda que vou buscar o ID ao invés do nome do cliente
  

   Identificar qual o target da ação
  const element = event.target.closest('.client');
  element.setAttribute('data-status', 'archived');

   Buscar o index do item que cliquei para apagar no array
  //const index = clients.findIndex(item => item.id == element.getAttribute('data-id'));

   Apagar elemento do Array
  // clients.splice(index, 1);

   Busquei o item e troquei a informação do isActive para false
  const item = clients.find(item => item.id == element.getAttribute('data-id'));
  item.isActive = false;

   Update localstorage
  updateStorage();


      * Minha solução abaixo
      Identificar qual o target da ação
      const element = event.target.closest('.client');

    Identificar qual o ID do client que eu cliquei
      const inputTitle = element.querySelector('.client__title');
      const item = clients.indexOf(inputTitle.value);

      Apagar elemento do Array
      clients.splice(item, 1);

    Update localstorage
      updateStorage();

    Remover elemento da página
      element.remove();

}
*/

/* Replaced function with onStatusToggle function onRestore(event) {
  const element = event.target.closest('.client');
  element.setAttribute('data-status', 'active');

  const item = clients.find(item => item.id == element.getAttribute('data-id'));
  item.isActive = true;

  updateStorage();
} */


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