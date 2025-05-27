import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./commponents/Navbar";
import Pages from "./commponents/Pages";
import Consumer from "./commponents/Consumer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Consumer />
    </>
  );
}

export default App;
