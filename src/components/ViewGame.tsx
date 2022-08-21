import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";

export default function ViewGame() {
  interface Info {
    title: string;
    thumb: string;
  }

  interface Deal {
    dealID: string;
    price: string;
    retailPrice: string;
    savings: number;
  }
  const [info, setInfo] = useState<Info>(Object);
  const [deals, setDeals] = useState<Deal[]>([]);
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

  const p = () => {
    console.log(deals);
  };

  return (
    <>
      <Title />
      <button onClick={p}>sss</button>
      <div>
        <p className="game-title">{info.title}</p>
        <img className="deal-pic" src={info.thumb} alt="thumbnail" />
      </div>
      <div className="container">
        {deals.map((deal: Deal) => {
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
                <a
                  target="blank"
                  href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                >
                  <button className="view-btn">View Deal</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
