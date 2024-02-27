import { useEffect } from "react";
import { useState } from "react"


export const useDebounce = (value,delay) => {

  const [debounceValue,setDebounceValue] = useState("");

  useEffect(() => {
    const handler = setInterval(() => {
      setDebounceValue(value)
    }, [delay])
    
    return () => {
      clearTimeout(handler);
    }

  }, [value])

  return debounceValue;
}