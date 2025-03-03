import React from 'react';

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
    const nextToastArr = toastArr.filter(toast => toast.id != id)
    setToastArr(() => nextToastArr);
  }

  const value = React.useMemo(() => {
    return {toastArr, setToastArr, addNewToast, removeToast}
  }, [toastArr, setToastArr])


  return (
    <ToastContext value={value}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
