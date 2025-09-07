// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-20"> {/* pt-20 to offset fixed header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            At <span className="font-semibold">TravelPro</span>, we believe
            traveling should be an unforgettable experience. Our mission is to
            connect explorers with the beauty, culture, and hidden gems of every
            destination.
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <img
              src="https://source.unsplash.com/600x400/?travel,adventure"
              alt="Travel"
              className="rounded-2xl shadow-md"
            />

            {/* Text */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>🌍 Tailored travel experiences to fit every explorer.</li>
                <li>🛫 Trusted network of guides and partners worldwide.</li>
                <li>🏝️ Curated destinations for authentic cultural immersion.</li>
                <li>💼 24/7 support to make your journey seamless.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
