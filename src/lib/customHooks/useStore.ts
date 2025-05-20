import { useState, useEffect } from 'react'

const useLocalStorage = () => {
    const [value, setValue] = useState<any>(() => {
        if (typeof window === "undefined") {
          return "";
        }
    
        try {
          const storedValue:any = window.localStorage.getItem("threads");
          return JSON.parse(storedValue) || "";
        } catch (error) {
          console.warn(error);
          return "";
        }
      });
    
      useEffect(() => {
        localStorage.setItem("threads", JSON.stringify(value));
      }, [value]);
    
      const updateValue = (newValue: string) => {
        setValue(newValue);
      };

  return [value, updateValue]
}

export default useLocalStorage;