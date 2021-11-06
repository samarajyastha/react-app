import { useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([
    {
      id: 1,
      name: "Goblin",
    },
    {
      id: 2,
      name: "Orc",
    },
    {
      id: 3,
      name: "Troll",
    },
  ]);
  return (
    <div className="App">
      {monsters.map((monster) => (
        <h2 key={monster.id}>{monster.name}</h2>
      ))}
    </div>
  );
}

export default App;
