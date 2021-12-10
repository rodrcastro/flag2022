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
    input.setAttribute('type', 'text');
    input.setAttribute('name', `team_member_${member.id}`);
    input.setAttribute('value', 0);

    rate.prepend(input);

    const role = document.createElement('td');
    role.innerHTML = '<span class="team__role">Owner</span>';

    row.append(user, email, rate, role);

    document.querySelector('.team__table tbody').append(row);
}

function getMembersFromAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // create member
        });
}

getMembersFromAPI();
