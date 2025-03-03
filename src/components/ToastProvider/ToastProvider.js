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

  // const value = React.useMemo(() => {
  //   return {toastArr, setToastArr, addNewToast, removeToast}
  // }, [toastArr, setToastArr])

  React.useEffect(() => {
    const handleEscpeKeyPress = (event) => {
      if (event.key === 'Escape') {
        setToastArr(() => []); // clear toasts array
      }
    }

    document.addEventListener('keydown', handleEscpeKeyPress);

    return () => document.removeEventListener('keydown', handleEscpeKeyPress);
  }, [])


  return (
    <ToastContext value={{toastArr, addNewToast, removeToast}}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
