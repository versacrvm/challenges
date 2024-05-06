import "./App.css";

export default function App() {
  return (
    <main>
      <Button>hello</Button>
      <Button>hi</Button>
      <Button>hey</Button>
      <Button>hy</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
