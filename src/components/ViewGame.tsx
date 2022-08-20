import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewGame() {
  const [info, setInfo] = useState<any>([]);
  const [deals, setDeals] = useState<any>([]);
  const params = useParams();

  useEffect(() => {
    getGame();
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
      <div>
        <img src={info.thumb} alt="thumbnail" />
        <p>{info.title}</p>
      </div>
      <div>
        {deals.map((deal: any) => {
          return (
            <div key={deal.dealID}>
              <p>Price: {deal.price}</p>
              <p>Retail Price: {deal.retailPrice}</p>
              <p>Savings: {deal.savings}</p>
              <a
                target="blank"
                href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
              >
                View Deal
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
