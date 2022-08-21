import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Search Games</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
