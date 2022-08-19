export default function SearchGame({
  title,
  cheapestPrice,
  picture,
}: {
  title: string;
  cheapestPrice: string;
  picture: string;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Cheapest price: {cheapestPrice}</p>
      <img src={picture} alt="thumbnail" />
    </div>
  );
}
