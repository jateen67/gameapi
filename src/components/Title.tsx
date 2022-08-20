import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div>
      <Link to="/">
        <h1>Dealing Chamber</h1>
      </Link>
      <p>
        Find the <strong>cheapest deals</strong> in PC gaming
      </p>
    </div>
  );
}
