import "./App.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <>{isHappy ? <div>😁</div> : <div>🙁</div>}</>;
}
