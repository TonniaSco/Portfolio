// Projects.jsx
import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Capstone",
    description: "A full-stack flower shop app with authentication & Stripe.",
    image: "https://www.southernidaholandscapecenter.com/cdn/shop/products/Osteospermum_FlowerPower_Spider_Purple_Bloom_35129.jpg?v=1678251333",
    link: "https://yourcapstonelink.com",
  },
  {
    title: "Bookstore",
    description: "An online bookstore app built with React & MongoDB.",
    image: "https://media.wired.co.uk/photos/606da03e687a704c2c3617da/16:9/w_2560,c_limit/encryption_1.jpg",
    link: "https://yourbookstorelink.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using React & OpenWeather API.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomENS5CoBAPNpFaNtGENcEpfpSoUulYtQaQ&s",
    link: "https://weather-app-mrra.onrender.com",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
        
        <div className="carousel-track">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${index === current ? "active" : "hidden"}`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn next" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
}
