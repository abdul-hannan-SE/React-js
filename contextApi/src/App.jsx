import { useEffect, useState } from "react";
import { Card, ThemeBtn, Test } from "./components";
import { VariableProvider } from "./context/variableContext";
import { ThemeProvider } from "./context/theme";

function App() {
  const [variable, setVariable] = useState("Abdul Hannan");
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const changeName = () => {
    setVariable("Honey");
  };
  return (
    <VariableProvider value={{ variable, changeName }}>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <Test />
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              {" "}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </VariableProvider>
  );
}

export default App;
