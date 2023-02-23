import React, { useEffect, useState } from "react";
import "./styles.css";
import CardList from "./components/card-list/CardList-Component";
import SearchBox from "./components/search-box/Search-Box-Component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [seachField, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMonsters(() => {
          return result;
        });
      });
  }, []);

  const filteredMOnsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(seachField);
  });

  const onMonsterSearch = (e) => {
    setSearchfield(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <h1 className="app-title">Monster Search</h1>
        <SearchBox onMonsterSearch={onMonsterSearch} />
      </div>
      <div>
        <CardList monsters={filteredMOnsters} />
      </div>
    </div>
  );
};
export default App;
