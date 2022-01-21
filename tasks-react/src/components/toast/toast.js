import { useState, useContext } from 'react';
import { ToastContext } from '../../contexts/toast-context';
import './toast.scss';

function Toast() {
  const [count, setCount] = useState(5);
  const [isActive, setIsActive] = useState(true);
  const {toasts, setToasts} = useContext(ToastContext)

  // const updatedData = [...data, newData]

  const onClose = (event) => {
    console.log(event, 'click na toast');
  }

/*   const addToast = () => {
    setData([...data,
    {
      id: count,
      message: `Nova Toast com id ${count}`,
      type: 'success'
    }]);

    setCount(count + 1);
    setIsActive(!isActive);
  } */

  return (
    <div className='toast'>
      {/* <button onClick={addToast}>Add toast {count}</button> */}
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