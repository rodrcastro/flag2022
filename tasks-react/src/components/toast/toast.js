//import React from 'react'
import './toast.scss'

function Toast() {
  return (
    <div class="toast">
      <div class="toast__item">
        <p class="toast__message">Lorem ipsum dolor sit amet.</p>
        <button class="toast__close">
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>
  )
}

export default Toast;