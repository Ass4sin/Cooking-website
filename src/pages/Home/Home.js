import "./Home.css";
// import "./Navbar/Navbar";
import Navbar from "../../components/AppBody/Navbar/Navbar";
import MainSection from "../../components/AppBody/MainSection/MainSection";

export default function AppBody(){
    return(
        <>
            <Navbar></Navbar>
            <MainSection></MainSection>
        </>
    )
}

export { AppBody };