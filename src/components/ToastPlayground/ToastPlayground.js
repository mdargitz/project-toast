import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastArr, setToastArr] = React.useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setToastArr([...toastArr, {
      id: crypto.randomUUID(),
      variant,
      message
    }])

    setMessage('');
    setVariant(VARIANT_OPTIONS[0])
  }

  const handleDismiss = id => {
    const nextToastArr = [...toastArr];
    const indexToDelete = nextToastArr.findIndex(item => item.id == id);
    if (indexToDelete > -1) {
      nextToastArr.splice(indexToDelete, 1);
    }
    setToastArr(nextToastArr);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf list={toastArr} handleDismiss={handleDismiss} />
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={event => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
           {VARIANT_OPTIONS.map((option, index) => {
            return (
              <label htmlFor={`variant-${option}`} key={index}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={event => setVariant(event.target.value)}
                />
                {option}
            </label>
            );
           })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
