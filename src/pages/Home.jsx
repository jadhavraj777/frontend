import React from "react";

const Home = () => {
  
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
        <h2 style={styles.heading}>Choose From</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {[
            {
              title: "Veg Recipes",
              text: "Delicious vegetarian dishes to enjoy.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6GqkqoZQnPrgajzmkAJx6xVpYNzI1SZ8iA&s",
            },
            {
              title: "Non-Veg Recipes",
              text: "Tasty non-vegetarian meals.",
              img: "https://www.jaypeehotels.com/blog/wp-content/uploads/2024/04/BLOG-1-15.jpg",
            },
            {
              title: "Desserts",
              text: "Sweet treats for every occasion.",
              img: "https://hips.hearstapps.com/hmg-prod/images/best-chocolate-desserts-recipes-peanut-butter-molten-chocolate-cakes-648c51a927c0a.jpg?crop=1xw:0.9989969909729187xh;center,top&resize=980:*",
            },
            {
              title: "Drinks",
              text: "Refreshing beverages for all seasons.",
              img: "https://www.saveur.com/uploads/2007/02/SAVEUR_Mojito_1149-Edit-scaled.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440",
            },
          ].map((card, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={card.img}
                  className="card-img-top"
                  alt={card.title}
                  style={styles.cardImage}
                />
                <div className="card-body" style={styles.cardBody}>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="/readmore" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;