import { useState, useEffect, useContext } from 'react';
import { ToastContext } from '../../contexts/toast-context';
import './toast.scss';

function Toast() {
  const [isActive, setIsActive] = useState(true);
  const {toasts, setToasts} = useContext(ToastContext);
  
  useEffect(() => {
    console.log('Toast is rendered');

  });

  // const updatedData = [...data, newData]

  const onClose = (event) => {
    console.log(event, 'click na toast');
  }

  const addToast = () => {
    setToasts([...toasts,
    {
      id: new Date().getTime(),
      message: `Nova Toast`,
      type: 'success'
    }]);

    setIsActive(!isActive);
  }

  return (
    <div className='toast'>
      <button onClick={addToast}>Add toast</button>
        {toasts.map(element => (
          <div key={element.id} className="toast__item" data-status={element.type}>
            <p className="toast__message">{element.message}</p>
            <button className="toast__close" onClick={onClose}>
              <span className="material-icons">close</span>
            </button>
          </div>
        ))}
    </div>
  )
}

export default Toast;