import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const styles = {
    cardImage: {
      height: "200px", 
      objectFit: "cover", 
      width: "100%",
    },
    cardBody: {
      minHeight: "150px", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    heading: {
      backgroundColor: "#28a745",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
      textAlign: "center",
    },
  };

  // Fetch recipes from the API when the component is mounted
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:4000/recipes"); // Replace with your API URL
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        } else {
          console.error("Failed to fetch recipes");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cf/b9/a3/dum-gosht-biryani.jpg?w=900&h=500&s=1",
            "https://t4.ftcdn.net/jpg/06/21/54/41/360_F_621544128_inBjLYomzXLGFiNVri9ebirH1MMJ7ige.jpg",
            "https://truffle-assets.tastemadecontent.net/a2352212-vid55254-og-puranpoli-16x9.jpg",
          ].map((image, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ height: "60vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Carousel Caption for Tagline */}
        <div className="carousel-caption d-none d-md-block">
          <h2 style={{ color: "#0af3f7", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            "Cook. Share. Inspire. Your Recipes, Our Community!" 
          </h2>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Card Section */}
      <div className="container mt-4">
      <h2 className="bg-success text-white rounded-pill" style={styles.heading}>Choose From</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {recipes.length === 0 ? (
            <p>No recipes available yet!</p>
          ) : (
            recipes.map((recipe, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={`http://localhost:4000${recipe.image}`} // Make sure the image URL is correct
                    className="card-img-top"
                    alt={recipe.name}
                    style={styles.cardImage}
                  />
                  <div className="card-body" style={styles.cardBody}>
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.ingredients.join(", ")}</p>
                    <Link to={`/recipes/${recipe._id}`} className="btn btn-success rounded-pill">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
