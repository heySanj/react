import { useState, useEffect } from 'react';

const useCounter = (amount) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + amount);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [amount]);

    // We can return whatever we want from our custom hooks
    // In this case, we return the counter
    return counter

}

export default useCounter;
