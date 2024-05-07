import "./App.css";
import { useState } from "react";

export default function App() {
  let [code, setCode] = useState("???");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          handleClick((code = ""));
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>{code}</p>}
    </div>
  );
}
