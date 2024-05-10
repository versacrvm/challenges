import Card from "./components/Card";
import "./App.css";

const fruits = [
  {
    id: 1337,
    name: "🍌 Banana",
    color: "yellow",
  },
  {
    id: 1338,
    name: "🍎 Apple",
    color: "red",
  },
  {
    id: 1339,
    name: "🍋 Lemon",
    color: "yellow",
  },
  {
    id: 1340,
    name: "🍊 Orange",
    color: "orange",
  },
  {
    id: 1341,
    name: "🍒 Cherry",
    color: "red",
  },
];

export default function App() {
  const fruitList = fruits.map((fruit) => (
    <Card name={fruit.name} key={fruit.id} />
  ));

  return <div className="app">{fruitList}</div>;
}
