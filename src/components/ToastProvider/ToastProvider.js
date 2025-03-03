import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastArr, setToastArr] = React.useState([]);

  const addNewToast =(message, variant) => {
    setToastArr(currentValue => { return [...currentValue, {
      id: crypto.randomUUID(),
      variant,
      message
    }]})
  }

  const removeToast = (id) => {
    const nextToastArr = toastArr.filter(toast => toast.id !== id)
    setToastArr(() => nextToastArr);
  }

  useEscapeKey(() => {
    setToastArr([]);
  })


  return (
    <ToastContext value={{toastArr, addNewToast, removeToast}}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
