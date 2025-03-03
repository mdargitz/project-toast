import React from 'react'

function useEscapeKey(callback) {
    React.useEffect(() => {
        const handleEscpeKeyPress = (event) => {
        if (event.key === 'Escape') {
            callback();
        }
    }

    document.addEventListener('keydown', handleEscpeKeyPress);

    return () => document.removeEventListener('keydown', handleEscpeKeyPress);
  }, [callback])
}

export default useEscapeKey;