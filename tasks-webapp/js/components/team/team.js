import './team.scss';

/*
<tr>
    <td>Pereira Flag (you)</td>
    <td>nuno.pereira.flag@gmail.com</td>
    <td class="team__rate">
        <input type="text" name="team_member_1" value="0">
        <span>€</span>
    </td>
    <td>
        <span class="team__role">Owner</span>
    </td>
</tr>
*/

function createMember(member) {
    const row = document.createElement('tr');
    
    const user = document.createElement('td');
    user.textContent = member.name;

    const email = document.createElement('td');
    email.textContent = member.email;

    const rate = document.createElement('td');
    rate.classList.add('team__rate');
    rate.innerHTML = "<span>€</span>";

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('name', `team_member_${member.id}`);
    input.setAttribute('value', member.rate);
    input.setAttribute('data-id', `${member.id}`);
    input.addEventListener('blur', onInputBlur);
    
    rate.prepend(input);

    const role = document.createElement('td');
    role.innerHTML = `<span class="team__role" data-role="${member.role}">${member.role}</span>`;

    row.append(user, email, rate, role);

    document.querySelector('.team__table tbody').append(row);
}

let membersData = JSON.parse(localStorage.getItem('members'));

function onInputBlur(event) {
    const element = event.target.closest('input');
    // Outra forma de puxar essa info do target:
    // const {target} = event; - Destructuring

    const item = membersData.find(el => el.id == element.getAttribute(`data-id`));
    item.rate = element.value;

    localStorage.setItem('members', JSON.stringify(membersData));
}

function renderMembers(data) {
    for (let item of data) {
        createMember(item);
    }
}

function getMembersFromAPI() {
    const roles = ['Project Manager', 'Frontend Developer', 'Backend Developer', 'UI Designer', 'UX Designer', 'Tech Lead', 'QA'];

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            for (let item of data) {
                const random = Math.floor(Math.random() * roles.length);
                item.role = roles[random];
                createMember(item);
            }
            membersData = data;
            // Adicionar ao Local storage e stringify da data
            localStorage.setItem('members', JSON.stringify(data));
        });
}

if (localStorage.getItem('members')) {
    renderMembers(JSON.parse(localStorage.getItem('members')));
} else {
    getMembersFromAPI();
}

// Billable rate
// Campo de input
// Colocamos lá um valor, ao sair desse campo, ele guarde o valor no user correto e atualize no storage

