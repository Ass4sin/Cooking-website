import "./MainSection.css";
import { useState, useEffect } from "react";

export default function MainSection() {
    return(
        <main>
            <div>
                <FetchData></FetchData>
            </div>
        </main>
    )
}

function FetchData() {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("https://api.edamam.com/doc/open-api/recipe-search-v2.json")
        .then((res) => {
            console.log(res);
            // return res.json;
        })
        .then((data) => {
            console.log(data);
            setFood(data);
        })
    },[])
    return(
        <div>
            
        </div>
    )
}

export {MainSection};