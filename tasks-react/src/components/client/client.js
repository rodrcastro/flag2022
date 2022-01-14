import './client.scss';

function Client({data}) {
  // Posso tb fazer o destructuring const {name, id} = data

  return (
        <div className="client" data-status="active">
          <input
          type="text"
          className="client__title"
          value={data.name}
          name={`client_${data.id}`}
          readOnly
        />
        <button className="client__edit">
          <span className="material-icons">create</span>
        </button>
        <button className="client__delete">
          <span className="material-icons">delete</span>
        </button>
        <button className="client__restore">
          <span className="material-icons">restore</span>
        </button>
      </div>
  )
};

export default Client;