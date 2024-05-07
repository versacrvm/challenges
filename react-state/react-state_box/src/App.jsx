import "./App.css";
import { useState } from "react";

export default function App() {
  let [isActive, setIsactive] = useState(false);

  function handleClick() {
    setIsactive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
