import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/" id="Home">
                Home
            </Link>
            <Link to="/recipes" id="Recipes">
                Recipes
            </Link>
        </nav>
    );
}

export { Navbar };
