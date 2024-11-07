import { createContext, useContext } from "react";

export const VariableContext = createContext({
  variable: "Abdul Hannan",
  changeName: (newName) => {},
});

export const VariableProvider = VariableContext.Provider;

export default function useVariable() {
  return useContext(VariableContext);
}
