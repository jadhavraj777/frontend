import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests
import "../App.css"; // Import CSS

const AddRecipe = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [recipe, setRecipe] = useState({
    name: "",
    image: null, // Store the image file
    ingredients: "",
    procedure: "",
    note: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRecipe({ ...recipe, image: file });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!recipe.name || !recipe.ingredients || !recipe.procedure) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("name", recipe.name);
    formData.append("image", recipe.image);
    formData.append("ingredients", recipe.ingredients);
    formData.append("procedure", recipe.procedure);
    formData.append("note", recipe.note);

    try {
      // Send POST request to your backend API
      const response = await axios.post(
        "http://localhost:4000/add-recipe", // Adjusted endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Show success message if request is successful
      if (response.status === 201) {
        alert("Recipe added successfully!");

        // Reset form
        setRecipe({
          name: "",
          image: null,
          ingredients: "",
          procedure: "",
          note: "",
        });

        // Navigate to the home page
        navigate("/home");
      }
    } catch (error) {
      // Handle error
      console.error("Error adding recipe:", error);
      alert("Error adding recipe. Please try again.");
    }
  };

  return (
    <div className="add-recipe-container">
      <div className="add-recipe-box">
        <h1 className="add-recipe-title bg-success text-white rounded-pill">Add Your Recipe</h1>
        <form onSubmit={handleSubmit} className="add-recipe-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Recipe Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter recipe name"
              value={recipe.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="form-label">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-input"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients" className="form-label">
              Ingredients <span className="required">*</span>
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              className="form-textarea"
              placeholder="List ingredients (comma-separated)"
              value={recipe.ingredients}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="procedure" className="form-label">
              Procedure <span className="required">*</span>
            </label>
            <textarea
              id="procedure"
              name="procedure"
              className="form-textarea"
              placeholder="Provide step-by-step instructions"
              value={recipe.procedure}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="note" className="form-label">Note/Tip</label>
            <textarea
              id="note"
              name="note"
              className="form-textarea"
              placeholder="Add any additional notes or tips (optional)"
              value={recipe.note}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="form-button btn-success rounded-pill">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
