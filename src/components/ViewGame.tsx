import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";

export default function ViewGame() {
  const [info, setInfo] = useState<any>([]);
  const [deals, setDeals] = useState<any>([]);
  const params = useParams();

  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGame = async () => {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${params.id}`
    );
    const data = await res.json();
    setInfo(data.info);
    setDeals(data.deals);
  };

  return (
    <>
      <Title />
      <div>
        <p className="game-title">{info.title}</p>
        <img className="deal-pic" src={info.thumb} alt="thumbnail" />
      </div>
      <div className="container">
        {deals.map((deal: any) => {
          return (
            <div className="cell deal-cell" key={deal.dealID}>
              <div className="info">
                <p className="game-price">
                  Price:
                  <span className="game-price-number"> ${deal.price}</span>
                </p>
                <p className="game-price">
                  Retail:
                  <span className="game-retail-price">
                    {" "}
                    ${deal.retailPrice}
                  </span>
                </p>
                <p className="game-savings">
                  Savings:
                  <span className="game-savings-number">
                    <strong> {Math.round(deal.savings)}%</strong>
                  </span>
                </p>
              </div>
              <div className="btn-container">
                <button className="view-btn">
                  <a
                    target="blank"
                    href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                  >
                    View Deal
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
