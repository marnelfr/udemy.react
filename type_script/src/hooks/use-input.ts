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

  const hasError = isTouched && !callback(value);

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

  return { value, hasError, changeHandler, blurHandler };
};

export default useInput;
