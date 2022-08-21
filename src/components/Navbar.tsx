import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="fff" to={"/"}>
              Search Games
            </Link>
          </li>
          <li>
            <Link className="fff" to={"/about"}>
              About This Project
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
