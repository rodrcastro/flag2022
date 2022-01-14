import Client from '../client/client'

import './clients.scss'

function Clients() {
  const data = [
    {
      id: 1,
      name: 'Worten',
      isActive: true
    },
    {
      id: 2,
      name: 'Fnac',
      isActive: true
    },
    {
      id: 3,
      name: 'BMW',
      isActive: false
    },
    {
      id: 4,
      name: 'Apple',
      isActive: true
    },
    {
      id: 5,
      name: 'Microsoft',
      isActive: true
    },
  ];
  
  return (
    <section className="clients">
      <header className="clients__header">
        <h2 className="clients__headline">Clients</h2>
        <div className="clients__filters">
          <select name="clients_filter" id="" className="clients__select">
            <option value="active">Show active</option>
            <option value="archived">Show archived</option>
            <option value="">Show all</option>
          </select>
          <input
            type="search"
            className="clients__input"
            name="clients_search"
            placeholder="Search by name"
          />
        </div>
        <form action="#nowhere" className="clients__create">
          <input
            type="text"
            name="create_client"
            className="clients__input"
            placeholder="Add new client"
          />
          <button type="submit" className="button clients__add" disabled>
            Add
          </button>
        </form>
      </header>
      <div className="clients__container" data-status="active">
      <p className="clients__label">Name</p>
    
        {data.map(client => (
          <Client key={client.id} data={client}/>
        ))}

      </div>
    </section>
  )
}

export default Clients