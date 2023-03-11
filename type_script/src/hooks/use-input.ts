import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  useCallback,
  useState,
} from "react";

const useInput = (callback: (val: string) => boolean) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = callback(value);
  const hasError = isTouched && !isValid;

  const changeHandler: ChangeEventHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setValue(event.target.value);
    },
    []
  );

  const blurHandler: FocusEventHandler = useCallback(() => {
    setIsTouched(true);
  }, []);

  const hasBeenTouched = () => setIsTouched(true);

  return {
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    hasBeenTouched,
  };
};

export default useInput;
