import "./Home.css";
import "./Navbar/Navbar";
import Navbar from "./Navbar/Navbar";
import MainSection from "./MainSection/MainSection";

export default function AppBody(){
    return(
        <div className="AppBody">
            <Navbar></Navbar>
            <MainSection></MainSection>
        </div>
    )
}

export { AppBody };