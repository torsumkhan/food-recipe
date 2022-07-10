import React from "react";
import { Link } from "react-router-dom";
import "./recipelist.css";

const RecipeList = ({ recipes, query }) => {
  if (recipes.length === 0) {
    return (
      <div className="error">Recipes with search term: {query} not found</div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to cook</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Full recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
