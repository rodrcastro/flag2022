import './clients.scss'

function Clients() {
  return (
    <section class="clients">
      <header class="clients__header">
        <h2 class="clients__headline">Clients</h2>
        <div class="clients__filters">
          <select name="clients_filter" id="" class="clients__select">
            <option value="active">Show active</option>
            <option value="archived">Show archived</option>
            <option value="">Show all</option>
          </select>
          <input
            type="search"
            class="clients__input"
            name="clients_search"
            placeholder="Search by name"
          />
        </div>
        <form action="#nowhere" class="clients__create">
          <input
            type="text"
            name="create_client"
            class="clients__input"
            placeholder="Add new client"
          />
          <button type="submit" class="button clients__add" disabled>
            Add
          </button>
        </form>
      </header>
    </section>
  )
}

export default Clients