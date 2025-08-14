import { useState } from "react";
import { useNotification } from "../contexts/Notification";

export function useForm(options = {}) {
  const { handler } = options;
  const { showNotification } = useNotification();

  const [values, setValues] = useState({});

  const onChange = (e) => {
    const { name, type } = e.target;
    setValues((state) => ({
      ...state,
      [name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handler(values);
      showNotification(response.message, "success");
    } catch (error) {
      showNotification(error.message, "error");
    }
  };

  return {
    values,
    setValues,
    onChange,
    onSubmit,
  };
}
