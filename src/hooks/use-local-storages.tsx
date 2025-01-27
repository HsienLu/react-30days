import {useState} from "react";

export default function useLocalStorage<T>(keyName: string) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(keyName);
    const itemJSON = JSON.parse(item!);
    return itemJSON;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(keyName, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}
