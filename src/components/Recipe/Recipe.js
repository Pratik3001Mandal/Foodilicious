import React, {useEffect, useState} from 'react'
import RecipeItem from '../RecipeItem/RecipeItem'
import "./Recipe.css";

export default function Recipe() {

    const [recipe, setrecipe] = useState([]);
    const APP_ID = "f6006c9a";
    const APP_KEY = "1d48becda5ef049afb5c0c595f634058"
    const URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

    useEffect(() => {
        fetchRecipe();
    })

    const fetchRecipe = async () => {
        const data = await fetch(URL);
        const parsedData = await data.json();
        setrecipe(parsedData.hits);
    }
  return (
    <div className='recipeContainer'>
      <h1 className='text-center'>Recipe List</h1>
      <div className="container">
        <div className="row my-3">
          {recipe.map((element)=>{
            return <div className="col-md-6 my-3" key={element.recipe.url}>
                      <RecipeItem image={element.recipe.image}
                      label={element.recipe.label}
                      url={element.recipe.url}
                      source={element.recipe.source}
                      dietLabels={element.recipe.dietLabels}
                      ingredientLines={element.recipe.ingredientLines}
                      />
                    </div>
          })}
        </div>
      </div>
    </div>
  )
}
