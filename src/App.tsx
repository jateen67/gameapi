import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import SearchGame from "./components/SearchGame";
import Title from "./components/Title";

function App() {
  const [games, setGames] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const getGames = async (name: string) => {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${name}`
    );
    const data = await res.json();
    setGames(data);
  };

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    getGames(search);
  };

  return (
    <div className="App">
      <Title />
      <form onClick={getSearch}>
        <input
          type="text"
          placeholder="Search a game by name"
          value={search}
          onChange={changeSearch}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {games.map((game: any) => {
          return (
            <SearchGame
              title={game.title}
              cheapestPrice={game.cheapest}
              picture={game.thumb}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
