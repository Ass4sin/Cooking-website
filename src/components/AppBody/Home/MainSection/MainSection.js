import "./MainSection.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const API_KEY = "8c8ba6c5a4d6a0980c664822f1721e07";
const API_ID = "fc0e8ed5";

export default function MainSection() {

    const [query, setQuery] = useState('rice');
    const [recipeImages, setRecipeImage] = useState([]);

    useEffect(() => {
        // Fetch the data from the API
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=${query}`)
            .then(res => res.json())
            .then(data => {
                // Extract image URLs from the results
                const images = data.hits.map(hit => hit.recipe.image);
                setRecipeImage(images);
                console.log(images);
            });
    }, [query]);

    return (
        <>
            <main>
                <div className="main-container">
                    <div className="image-container">
                        <FontAwesomeIcon icon={faArrowLeft} id="arrow-left" />
                        {recipeImages.length > 0 && <img src={recipeImages[0]} alt="Recipe" />}
                        <FontAwesomeIcon icon={faArrowRight} id="arrow-right"/>
                    </div>
                </div>
            </main>
        </>
    );
}

// This function will serve to call the API and get the images
export { MainSection };
