//import React from 'react'
import './toast.scss'

function Toast() {
  return (
    <div className="toast">
      <div className="toast__item">
        <p className="toast__message">Lorem ipsum dolor sit amet.</p>
        <button className="toast__close">
          <span className="material-icons">close</span>
        </button>
      </div>
    </div>
  )
}

export default Toast;