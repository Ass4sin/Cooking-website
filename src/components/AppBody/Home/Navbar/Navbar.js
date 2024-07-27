import "./Navbar.css";

export default function Navbar() {
    return(
        <nav>
            <div id="Home">
                <a href="../../../../../public/index.html">
                Home
                </a>
            </div>
            <div id="Recipes">
                <a href="../../../../../public/work.html">
                Recipes
                </a>
            </div>
        </nav>
    )
}

export {Navbar};