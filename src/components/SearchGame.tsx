import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { Game } from "../models";

export default function SearchGame() {
  const [games, setGames] = useState<Game[]>([]);
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
      <Title />
      <p className="title">Game Name</p>
      <form onClick={getSearch}>
        <input
          type="text"
          placeholder="Search for a game"
          value={search}
          onChange={changeSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        {games.map((game: Game) => {
          return (
            <div className="cell" key={game.gameID}>
              <div className="info">
                <h3 className="game-title">{game.external}</h3>
                <img className="game-pic" src={game.thumb} alt="thumbnail" />
                <p className="game-price">
                  Cheapest:
                  <span className="game-price-number"> ${game.cheapest}</span>
                </p>
              </div>
              <div className="btn-container">
                <Link to={game.gameID}>
                  <button className="view-btn">Check Deals</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
