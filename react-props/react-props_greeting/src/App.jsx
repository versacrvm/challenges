import "./App.css";

export default function App() {
  return <Greeting name={"Fabian"} />;
}

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
