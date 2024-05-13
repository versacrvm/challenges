import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(URL);
      const coords = await response.json();

      //console.log(coords);
      setCoords(coords);
    }
    const interval = setInterval(getISSCoords, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls longitude={coords.longitude} latitude={coords.latitude} />
    </main>
  );
}
