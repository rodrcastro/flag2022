import { useState } from 'react';
import './toast.scss';

function Toast() {
  const [count, setCount] = useState(5);
  const [isActive, setIsActive] = useState(true);
  const [data, setData] = useState([
    {
      id: 1,
      message: 'Toast info',
      type: 'info'
    },
    {
      id: 2,
      message: 'Toast warning',
      type: 'warning'
    },
    {
      id: 3,
      message: 'Toast error',
      type: 'error'
    },
    {
      id: 4,
      message: 'Toast success',
      type: 'success'
    },
  ]);
  // const updatedData = [...data, newData]

  const onClose = (event) => {
    console.log(event, 'click na toast');
  }

  const addToast = () => {
    setData([...data,
    {
      id: count,
      message: `Nova Toast com id ${count}`,
      type: 'success'
    }]);

    setCount(count + 1);
    setIsActive(!isActive);
  }

  return (
    <div className='toast'>
      <button onClick={addToast}>Add toast {count}</button>
        {data.map(element => (
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