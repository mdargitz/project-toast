import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const {toastArr} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toastArr.map(({id, variant, message}) => {
        return <Toast key={id} id={id} variant={variant}><p>{message}</p></Toast>
      })}
    </ol>
  );
}

export default ToastShelf;
