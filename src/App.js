import { useContext } from "react";
import { ThemeContext } from "./components/Theme/ThemeContext";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div data-theme={theme}>
        <HomePage />
      </div>
    </>
  );
}

export default App;
