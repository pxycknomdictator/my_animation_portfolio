import { createContext } from "react";

const FormStore = createContext({
  user: {},
  submit: () => {},
  received: () => {},
});

export default FormStore;
