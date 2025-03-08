import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddRecipe from "./pages/Add-recipe";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
      {isLoggedIn && (
        <button
          className="btn btn-success rounded-pill position-fixed d-flex align-items-center justify-content-center"
          style={{
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "auto",
            height: "auto",
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            window.location.href = "/add-recipe";
          }}
        >
          + Add Your Recipe
        </button>
      )}
      <Footer />
    </Router>
  );
}

export default App;
