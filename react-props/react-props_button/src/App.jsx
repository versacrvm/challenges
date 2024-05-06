import "./App.css";

export default function App() {
  function handleButton() {
    console.log("hello hello hello");
  }
  return (
    <ButtonComponent
      color={"red"}
      disabled={false}
      text={"Click Me"}
      onClick={handleButton}
    />
  );
}

function ButtonComponent({ color, disabled, text, onClick }) {
  return (
    <>
      <button onClick={onClick} style={{ color: color }} disabled={disabled}>
        {text}
      </button>
    </>
  );
}
