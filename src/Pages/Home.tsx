import React from "react";
import "../Styles/Home.css"; // custom CSS overrides
import heroImg from "../Assets/Home/banner.jpg"; // hero background image

const Home: React.FC = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="hero-section d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Explore Incredible India</h1>
          <p className="lead">
            Discover destinations, book hotels & flights, and plan your journey
            effortlessly.
          </p>
          <a href="/map" className="btn btn-primary btn-lg mt-3">
            Start Exploring
          </a>
        </div>
        <img src={heroImg} alt="India Travel" className="hero-bg" />
      </section>

      {/* ✅ Top Destinations */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Top Destinations</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="/assets/states/gujarat.jpg"
                  className="card-img-top"
                  alt="Gujarat"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Gujarat</h5>
                  <p className="card-text">
                    Land of culture, heritage, and the Gir National Park.
                  </p>
                  <a href="/states/gujarat" className="btn btn-outline-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="/assets/states/rajasthan.jpg"
                  className="card-img-top"
                  alt="Rajasthan"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Rajasthan</h5>
                  <p className="card-text">
                    The royal state of forts, palaces, and desert adventures.
                  </p>
                  <a
                    href="/states/rajasthan"
                    className="btn btn-outline-primary"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="/assets/states/maharashtra.jpg"
                  className="card-img-top"
                  alt="Maharashtra"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Maharashtra</h5>
                  <p className="card-text">
                    From Mumbai to Ajanta caves – a mix of culture & modernity.
                  </p>
                  <a
                    href="/states/maharashtra"
                    className="btn btn-outline-primary"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Booking Section */}
      <section className="booking-section py-5 text-white">
        <div className="container text-center">
          <h2 className="mb-3 section-title">Book Your Trip</h2>
          <p className="mb-4">
            Flights, hotels, and buses – everything at your fingertips.
          </p>
          <a href="/bookings" className="btn btn-light btn-lg">
            Start Booking
          </a>
        </div>
      </section>

      {/* ✅ Things To Do */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Things To Do</h2>
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="info-box shadow-sm">
                <h5 className="fw-bold">Adventure</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box shadow-sm">
                <h5 className="fw-bold">Heritage</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box shadow-sm">
                <h5 className="fw-bold">Spiritual</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box shadow-sm">
                <h5 className="fw-bold">Wildlife</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Reviews */}
      <section className="reviews-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-3 section-title">Traveler Reviews</h2>
          <p className="mb-4">
            See what explorers say about their journeys across India.
          </p>
          <a href="/reviews" className="btn btn-outline-dark">
            Read Reviews
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
