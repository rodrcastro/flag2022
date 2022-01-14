import './team.scss'

function Team() {
  return (
    <section class="team">
        <header class="team__header">
          <h2 class="team__headline">Members</h2>
        </header>
        <table class="team__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Billable rate</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td>Rodrigo Castro (you)</td>
              <td>ola@rodrigo.com</td>
              <td class="team__rate">
                <input type="text" name="team_member_1" value="0" />
                <span>€</span>
              </td>
              <td>
                <span class="team__role">Owner</span>
              </td>
            </tr>
          </tbody>
        </table>
    </section>
  )
}

export default Team