import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css";

const About: React.FC = () => {
  const offers = [
    { icon: "🌄", title: "Top Destinations", desc: "Curated guides of India’s best cities, nature spots & heritage sites." },
    { icon: "🎉", title: "Festivals & Culture", desc: "Discover traditions, celebrations, and cultural insights from every state." },
    { icon: "🍲", title: "Food Journeys", desc: "Explore local cuisines, street foods, and India’s culinary diversity." },
    { icon: "🚗", title: "Travel Inspirations", desc: "Ideas for road trips, scenic journeys, and offbeat experiences." },
    { icon: "📍", title: "State Explorer", desc: "Interactive map to dive into every state’s attractions, food & culture." },
    { icon: "📰", title: "Stories & Guides", desc: "Authentic travel stories, itineraries, and planning tips." },
  ];

  return (
    <div className="about-page">
      {/* Who We Are */}
      <section className="about-intro container text-center py-5">
        <h2>About Namaste Bharat</h2>
        <p className="lead text-muted">
          Namaste Bharat is more than a travel guide — it’s your companion to discover India’s diversity, heritage, and hidden gems.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission text-center py-5 bg-light">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="text-muted">
            To inspire travelers with authentic stories, cultural experiences, and curated guides — making every journey in India memorable.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-offer container py-5">
        <h2 className="text-center mb-4">✨ What We Offer</h2>
        <div className="row">
          {offers.map((offer, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card offer-card shadow-sm text-center p-4 h-100">
                <div className="icon mb-3">{offer.icon}</div>
                <h5>{offer.title}</h5>
                <p className="text-muted">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story py-5 text-white">
        <div className="overlay p-5 text-center">
          <h2>Our Story</h2>
          <p className="w-75 mx-auto">
            Born out of passion for India’s cultural richness, Namaste Bharat was created to bridge travelers with authentic experiences. 
            Whether you are planning your first trip or exploring hidden gems, we aim to make your journey unforgettable.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter container text-center py-5">
        <h2>Stay Connected</h2>
        <p className="text-muted">Get travel inspirations, guides, and cultural updates straight to your inbox.</p>
        <form className="d-flex justify-content-center mt-3">
          <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
          <button type="submit" className="btn btn-warning">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default About;
