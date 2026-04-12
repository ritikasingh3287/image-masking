import React, { useState } from "react";
import "./Hero.css";
import { motion } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";
const locations = [
    {
      title: "Eiffel Tower",
      desc: "Standing tall in the heart of Paris, the Eiffel Tower captures the timeless charm of the city. A masterpiece of iron and imagination.Its elegant silhouette against the sky makes every moment feel like a scene from a dream. Whether day or night, it continues to inspire millions with its iconic presence.",      img: "/images/hero1.png",
      img:"/image/hero1.png",
      heights: [500, 590, 470, 640, 600, 400],
    },
    {
      title: "Pyramids of Giza ",
      desc: "Rising from the golden sands of Egypt, the Pyramids of Giza stand as timeless symbols of human brilliance. Built thousands of years ago, these colossal structures continue to amaze with their precision and mystery. Each stone tells a story of ancient kings, lost civilizations, and unmatched craftsmanship.",
      img: "/image/hero2.png",
      heights: [450, 540, 680, 500, 550, 600],
    },
    {
      title: "Taj Mahal",
      desc: "The Taj Mahal stands as a luminous symbol of eternal love, carved in flawless white marble. Its perfectly balanced architecture and shimmering reflection captivate visitors from the moment they arrive. Built by Emperor Shah Jahan in memory of his beloved Mumtaz, it carries centuries of emotion within its walls.",
      img: "/image/hero3.png",
      heights: [580, 500, 620, 540, 700, 450],
    },
    {
      title: "Big Ben",
      desc: "Big Ben stands proudly over the River Thames, a timeless symbol of London’s heritage. Its Gothic architecture and resonant chimes have marked historic moments for over a century. Rising beside the Houses of Parliament, the tower glows beautifully at dusk, capturing the spirit of the city.",
      img: "/image/hero4.png",
      heights: [640, 500, 550, 500, 620, 480],
    },
    {
      title: "Statue of Liberty",
      desc: "The Statue of Liberty rises proudly above New York Harbor, a symbol of freedom and hope for millions. Gifted by France, her torch has welcomed generations of travelers arriving in search of new beginnings. The graceful folds of her robe and the crown’s seven rays reflect ideals that reach far beyond the city skyline.",
      img: "/image/hero5.png",
      heights: [400, 580, 600, 540, 620, 450],
    },
  ];
  
const Hero = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % locations.length);
  };


const prev = () => {
  setIndex((prev) => (prev - 1 + locations.length) % locations.length);
};

const current = locations[index];


  return (
    <div className="hero">
    <motion.div
      key={index}
      className="hero-bg"
      initial={{ scale: 1.02}}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{
        backgroundImage: `url(${current.img})`
      }}
    />
  
     
<div className="slices-wrapper">
  {current.heights.map((h, i) => (
    <motion.div
      key={index + "-" + i} 
      data-i={i + 1}
      className="slice"
      initial={{ height: 550 }}
      animate={{ height: h }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], 
      }}
      style={{
        backgroundImage: `url(${current.img})`,
      }}
    ></motion.div>
  ))}
</div>

      <motion.div
  key={index} 
  className="hero-text"
  initial={{ x: 80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
>
  <h1>{current.title}</h1>
  <p>{current.desc}</p>
</motion.div>


  
      <div className="hero-arrows">
        <button className="arrow-btn left" onClick={prev}>
          <ChevronLeft />
        </button>
        <button className="arrow-btn right" onClick={next}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;