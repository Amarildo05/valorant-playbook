import { useEffect, useRef, useState } from "react";
import { Agent, Weapon, Map } from "../../../types";
import "./carousel.css";
import { Link } from "react-router-dom";

// Generic type for carousel items
type CarouselItem = Agent | Weapon | Map;

interface CarouselProps {
  items: CarouselItem[]; // Array of items, could be Agent, Weapon, or Map
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const agentSliderRef = useRef<HTMLUListElement | null>(null);

  // Move the slider left or right
  const moveSlider = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return items.length - 1;
      if (newIndex >= items.length) return 0;
      return newIndex;
    });
  };

  // Auto slide every 12 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlider(1);
    }, 12000);

    return () => clearInterval(intervalId);
  }); // Added dependency array to ensure it runs only once on mount

  // Update the scroll position when the index changes
  useEffect(() => {
    if (agentSliderRef.current) {
      const offset = agentSliderRef.current.clientWidth * currentIndex;
      agentSliderRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div>
      <Link to="/">
        <button className="back-button">&#8249;</button>
      </Link>
      <button
        className="slide-btn"
        id="slide-btn-left"
        onClick={() => moveSlider(-1)}
      >
        &#8249;
      </button>
      <button
        className="slide-btn"
        id="slide-btn-right"
        onClick={() => moveSlider(1)}
      >
        &#8250;
      </button>
      <ul className="carousel-slider" ref={agentSliderRef}>
        {items.map((item) => (
          <li className="carousel-li" key={item.id}>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="carousel-item-info">
                <h1 className="carousel-name">{item.info.name}</h1>
                <p className="carousel-description">{item.info.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}