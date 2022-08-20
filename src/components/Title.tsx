import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div>
      <Link to="/">
        <h1 className="title">Dealing Chamber</h1>
      </Link>
      <p className="description">
        Find the <strong>cheapest deals</strong> in PC gaming
      </p>
    </div>
  );
}
