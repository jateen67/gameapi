import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchGame() {
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
    <>
      <form onClick={getSearch}>
        <input
          type="text"
          placeholder="Search a game by name"
          value={search}
          onChange={changeSearch}
        />
        <button type="submit">Search</button>
      </form>
      {games.map((game: any) => {
        return (
          <div key={game.gameID}>
            <h3>{game.external}</h3>
            <p>Cheapest price: {game.cheapest}</p>
            <img src={game.thumb} alt="thumbnail" />
            <Link to={game.gameID}>View Game</Link>
          </div>
        );
      })}
    </>
  );
}
