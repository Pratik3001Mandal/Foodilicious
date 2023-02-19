import React from 'react';
import './RecipeItem.css';

 const RecipeItem = (props) => {
    const {image, label, url, source, dietLabels, ingredientLines} = props;

  return (
    <>
        <div className="card">
        <span class="badge text-bg-success badgeSource">{source}</span>
            <img src={image}  className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{label} <span class="badge text-bg-light recipeBadge">{dietLabels}</span></h5>
                <ol>
                    {ingredientLines.map((element) => {
                        return <li>{element}</li>
                    })}
                </ol>
                <a href={url} className="btn btn-primary">Learn More</a>
            </div>
        </div>
    </>
  )
}

export default RecipeItem;