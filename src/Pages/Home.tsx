import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

import gir from "../Assets/Home/hero2.jpg";
import kerala from "../Assets/Home/hero5.jpg";
import goa from "../Assets/Home/hero3.jpg";
import jaipur from "../Assets/Home/hero4.jpg";
import ladakh from "../Assets/Home/hero5.jpg";
import kolkata from "../Assets/Home/hero3.jpg";
import varanasi from "../Assets/Home/hero6.jpg";
import mumbai from "../Assets/Home/hero2.jpg";
import meghalaya from "../Assets/Home/hero4.jpg";

import About from "./About";

const Home: React.FC = () => {
  // Hero slideshow images
  const images = [kerala, jaipur, goa, gir, ladakh, meghalaya];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Destinations
  const destinations = [
    { img: gir, title: "Gir – The Land of Lions", desc: "Home to the Asiatic lions and rich biodiversity." },
    { img: jaipur, title: "Jaipur – The Pink City", desc: "Royal palaces, forts, and colorful bazaars." },
    { img: goa, title: "Goa Beaches", desc: "Golden sands, nightlife, and Portuguese heritage." },
    { img: kerala, title: "Kerala – God’s Own Country", desc: "Famous for its backwaters, spices, and culture." },
    { img: ladakh, title: "Ladakh – Land of High Passes", desc: "Mountains, monasteries, and stunning landscapes." },
    { img: kolkata, title: "Kolkata – City of Joy", desc: "Literature, culture, and colonial architecture." },
    { img: varanasi, title: "Varanasi – Spiritual Capital", desc: "Sacred ghats on the Ganges River." },
    { img: mumbai, title: "Mumbai – City of Dreams", desc: "Financial capital & home to Bollywood." },
    { img: meghalaya, title: "Meghalaya – Abode of Clouds", desc: "Misty hills, waterfalls, and root bridges." }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = destinations.length;

  const getVisibleDestinations = () => {
    let visible: typeof destinations = [];
    for (let i = 0; i < 4; i++) {
      visible.push(destinations[(startIndex + i) % total]);
    }
    return visible;
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
    setIsAuto(false);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
    setIsAuto(false);
  };

  useEffect(() => {
    if (isAuto) {
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % total);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAuto, total]);

  const goToMapPage = () => {
    window.location.href = "/map";
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={images[currentImage]} alt="India Travel" className="hero-img" />
        <div className="hero-overlay text-center text-white">
          <h1 className="fw-bold">Namaste Bharat</h1>
          <p className="lead">Discover India’s culture, destinations, festivals & journeys.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="container text-center py-5">
        <h2>Why Explore India?</h2>
        <p className="text-muted">
          From the Himalayas to the beaches of Goa, India is a journey of traditions, flavors, and landscapes waiting for you.
        </p>
      </section>

      {/* Destinations */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Top Destinations</h2>
        <div className="slider-container d-flex align-items-center">
          <button className="btn btn-outline-dark me-2" onClick={prevSlide}>‹</button>
          <div className="d-flex flex-wrap justify-content-center fade-slider">
            {getVisibleDestinations().map((place, index) => (
              <div className="card place-card m-2" key={index}>
                <img src={place.img} className="card-img-top" alt={place.title} />
                <div className="card-body">
                  <h5 className="card-title">{place.title}</h5>
                  <p className="card-text">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-outline-dark ms-2" onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* Festivals & Culture */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Festivals & Culture</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src={varanasi} className="card-img-top" alt="Diwali" />
                <div className="card-body">
                  <h5>Diwali</h5>
                  <p>Festival of Lights celebrated across India with joy and devotion.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src={kolkata} className="card-img-top" alt="Durga Puja" />
                <div className="card-body">
                  <h5>Durga Puja</h5>
                  <p>Kolkata’s grand celebration with art, devotion & cultural spirit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src={mumbai} className="card-img-top" alt="Ganesh Chaturthi" />
                <div className="card-body">
                  <h5>Ganesh Chaturthi</h5>
                  <p>Vibrant festival of Lord Ganesha with processions & celebrations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="container text-center py-5">
        <h2>Travel Essentials</h2>
        <div className="row mt-4">
          {["Flights", "Hotels", "Buses", "Trains"].map((item, idx) => (
            <div className="col-md-3 mb-3" key={idx}>
              <div className="card booking-card shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">{item}</h5>
                  <p className="text-muted">Plan your {item.toLowerCase()} with trusted partners.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center text-white">
        <div className="overlay p-5">
          <h2>Plan Your Journey Today</h2>
          <p>Adventure, spirituality, food, or culture – India has it all.</p>
          <button className="btn btn-warning fw-bold" onClick={goToMapPage}>
            Explore Destinations
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />
    </div>
  );
};

export default Home;
