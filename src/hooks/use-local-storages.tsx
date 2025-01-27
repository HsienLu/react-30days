import {useState} from "react";

export default function useLocalStorage<T>(keyName: string) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(keyName);
    return JSON.parse(item!) ? JSON.parse(item!) : [];
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(keyName, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}
