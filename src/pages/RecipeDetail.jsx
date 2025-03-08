// RecipeDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();  // Extract the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:4000/recipes/${id}`);
        if (response.ok) {
          const data = await response.json();
          setRecipe(data);
        } else {
          console.error("Failed to fetch recipe");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{recipe.name}</h1>
      <img src={`http://localhost:4000${recipe.image}`} alt={recipe.name} className="img-fluid" />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Procedure:</h3>
      <p>{recipe.procedure}</p>
      <h3>Note:</h3>
      <p>{recipe.note}</p>
    </div>
  );
};

export default RecipeDetail;
