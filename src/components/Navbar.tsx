import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to={"/"}>
              Search Games
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              About Project
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
