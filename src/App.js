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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        <Route path="/add-recipe" element={<AddRecipe />} /> {/* Add Contact route */}
      </Routes>

     
<button
  className="btn btn-primary rounded-pill position-fixed d-flex align-items-center justify-content-center"
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
    window.location.href = "/Add-recipe";
  }}
>
  + Add Your Recipe
</button>
      <Footer /> 
    </Router>
  );
}

export default App;