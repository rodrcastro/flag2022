import './client.scss'

function Client() {
  return (
    <div class="clients__container" data-status="active">
      <p class="clients__label">Name</p>
      <div class="client">
        <input
          type="text"
          class="client__title"
          value="Others"
          name="client_1"
          readOnly
        />
        <button class="client__edit">
          <span class="material-icons">create</span>
        </button>
        <button class="client__delete">
          <span class="material-icons">delete</span>
        </button>
        <button class="client__restore">
          <span class="material-icons">restore</span>
        </button>
      </div> 
    </div>
  )
}

export default Client