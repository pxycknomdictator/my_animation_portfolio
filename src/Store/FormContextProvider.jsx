import React, { useEffect, useState } from "react";
import FormStore from "./index.js";

const FormContextProvider = ({ children }) => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [user, setUser] = useState(initialValues);

  const localTheme = "CurrentTheme";
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem(localTheme)) || false
  );

  useEffect(() => {
    localStorage.setItem(localTheme, JSON.stringify(theme));

    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  // input fields function
  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setUser(() => ({ ...user, [name]: value }));
  };

  // form submit function
  const handleSubmitForm = (event) => {
    event.preventDefault();
    setUser(() => initialValues);
  };

  return (
    <FormStore.Provider
      value={{ user, handleSubmitForm, handleChangeFields, theme, switchTheme }}
    >
      {children}
    </FormStore.Provider>
  );
};

export default FormContextProvider;
