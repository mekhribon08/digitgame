import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DigitGame from "./components/digitGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DigitGame />
    </>
  );
}

export default App;
