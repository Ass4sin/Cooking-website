import "./Home.css";
import "./Navbar/Navbar";
import Navbar from "./Navbar/Navbar";

export default function AppBody(){
    return(
        <div className="AppBody">
            <Navbar></Navbar>
        </div>
    )
}

export { AppBody };