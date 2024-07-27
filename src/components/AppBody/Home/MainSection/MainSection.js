import "./MainSection.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const API_KEY = "8c8ba6c5a4d6a0980c664822f1721e07";
const API_ID = "fc0e8ed5";

export default function MainSection() {

    const [query, setQuery] = useState('rice');
    const [recipeImages, setRecipeImage] = useState([]);
    const [imageId, setImageId] = useState(0)
    const image = document.querySelector('img');

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

    function increaseImage() {
        //recipeImages.length has to be at -2, for somereason imageId does 0 twice
        if (imageId > recipeImages.length - 2){
            return imageId;
        }
        console.log("RECIPE LENGTH",recipeImages.length);
        setImageId(imageId + 1)
        addAnimation();
        console.log(imageId);
    }

    function decreaseImage() {
        if (imageId === 0) {
            setImageId(0);
            return;
        }
        setImageId(prevCount => prevCount - 1)
        addAnimation();
    }

    function addAnimation() {
        //we add the class animation for the transition and then remove it
        image.classList.add("animation")
        setTimeout(() => {
            image.classList.remove("animation")
        }, 700);
    }

    return (
        <>
            <main>
                <div className="main-container">
                    <div className="image-container">
                        <FontAwesomeIcon icon={faArrowLeft} id="arrow-left" onClick={decreaseImage}/>
                        {recipeImages.length > 0 && <img src={recipeImages[imageId]} alt="Recipe" />}
                        <FontAwesomeIcon icon={faArrowRight} id="arrow-right" onClick={increaseImage}/>
                    </div>
                </div>
            </main>
        </>
    );
}

// This function will serve to call the API and get the images
export { MainSection };
