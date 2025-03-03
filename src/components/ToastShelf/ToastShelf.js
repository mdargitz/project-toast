import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({list, handleDismiss}) {

  return (
    <ol className={styles.wrapper}>
      {list.map(({id, variant, message}) => {
        return <Toast key={id} id={id} variant={variant} handleClose={handleDismiss}><p>{message}</p></Toast>
      })}
    </ol>
  );
}

export default ToastShelf;
