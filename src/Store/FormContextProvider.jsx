import React, { useState } from "react";
import FormStore from "./index.js";

const FormContextProvider = ({ children }) => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [user, setUser] = useState(initialValues);

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
    <FormStore.Provider value={{ user, handleSubmitForm, handleChangeFields }}>
      {children}
    </FormStore.Provider>
  );
};

export default FormContextProvider;
