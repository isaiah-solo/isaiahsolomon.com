import {useMemo, useState} from "react";

export default function useDebounced(func: (...args) => void, delay: number = 1000): () => void {
  const [timeoutID, setTimeoutID] = useState(null);

  return useMemo((...args): (() => void) => {
    return (): void => {
      if (timeoutID !== null) {
        setTimeoutID(null);
      }

      const newTimeoutID = setTimeout(() => {
        setTimeoutID(null);
        func(...args)
      }, delay);

      setTimeoutID(newTimeoutID);
    };
  }, [func, delay]);
};
