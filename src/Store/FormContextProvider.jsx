import React, { useEffect, useState } from "react";
import FormStore from "./index.js";

const FormContextProvider = ({ children }) => {
  const fullName = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [user, setUser] = useState(initialValues);
  const [dropMenu, setDropMenu] = useState(false);
  const [error, setError] = useState({});

  const localTheme = "CurrentTheme";
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem(localTheme)) || false
  );

  useEffect(() => {
    localStorage.setItem(localTheme, JSON.stringify(theme));

    if (theme) {
      document.documentElement.classList.add("dark", "animation");
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

    const { name, email, message, subject } = user;

    const newErrors = {};

    if (!fullName.test(name)) {
      newErrors["name"] = "Please enter a valid name";
    }

    if (email.trim() === "") {
      newErrors["email"] = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors["email"] = "Please enter a valid email address";
    }

    if (subject.trim() === "") {
      newErrors["subject"] = "Subject is required";
    }

    if (message.trim() === "") {
      newErrors["message"] = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      setUser(initialValues);
    }

    setError(newErrors);
  };

  const handleDropdown = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <FormStore.Provider
      value={{
        user,
        handleSubmitForm,
        handleChangeFields,
        theme,
        switchTheme,
        handleDropdown,
        dropMenu,
        error,
      }}
    >
      {children}
    </FormStore.Provider>
  );
};

export default FormContextProvider;
