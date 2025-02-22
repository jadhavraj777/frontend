import React from "react";
import "../App.css"; // Import CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to <strong>BeChef!</strong>, your go-to destination for discovering and sharing delicious recipes from around the world. Whether you're a seasoned chef or a beginner in the kitchen, we’re here to inspire your culinary journey.
        </p>

        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          At <strong>BeChef!</strong>, we believe that cooking is more than just a skill—it’s a way to connect, create, and share. Our mission is to:
        </p>
        <ul className="about-list">
          <li>Provide a platform for food lovers to explore a wide variety of recipes.</li>
          <li>Foster a community where users can share their culinary creations.</li>
          <li>Make cooking fun, accessible, and enjoyable for everyone.</li>
        </ul>

        <h2 className="about-subtitle">What We Offer</h2>
        <ul className="about-list">
          <li>
            <strong>Diverse Recipes</strong>: From quick snacks to gourmet meals, we’ve got something for every taste and occasion.
          </li>
          <li>
            <strong>User-Friendly Platform</strong>: Easily browse, save, and share your favorite recipes.
          </li>
          <li>
            <strong>Community-Driven</strong>: Join a vibrant community of food enthusiasts and share your own recipes with the world.
          </li>
        </ul>

        <h2 className="about-subtitle">Why Choose Us?</h2>
        <ul className="about-list">
          <li>
            <strong>Quality Content</strong>: Every recipe is carefully curated and tested.
          </li>
          <li>
            <strong>Inclusivity</strong>: We cater to all dietary preferences—vegan, gluten-free, non-veg, and more.
          </li>
          <li>
            <strong>Passion for Food</strong>: We’re food lovers just like you, and we’re here to make your cooking experience unforgettable.
          </li>
        </ul>

        <p className="about-text">
          Join us today and let’s cook, share, and inspire together! 🍴
        </p>
      </div>
    </div>
  );
};

export default About;