import { useEffect, useRef, useState } from "react";
import { Agent, Weapon, Map } from "../../../types";

// Generic type for carousel items
type CarouselItem = Agent | Weapon | Map;

interface CarouselProps {
  items: CarouselItem[]; // Array of items, could be Agent, Weapon, or Map
  sliderClass: string;
  liClass: string;
  backgroundClass: string;
  nameClass: string;
  descriptionClass: string;
}

export default function Carousel({
  items,
  sliderClass,
  liClass,
  backgroundClass,
  nameClass,
  descriptionClass,
}: CarouselProps) {
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

  // Auto slide every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlider(1);
    }, 0);

    return () => clearInterval(intervalId);
  }, []); // Runs once on mount

  // Update the scroll position when the index changes
  useEffect(() => {
    if (agentSliderRef.current) {
      const offset = agentSliderRef.current.clientWidth * currentIndex;
      agentSliderRef.current.scrollLeft = offset;
    }
  }, [currentIndex]);

  return (
    <div>
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
      <ul className={sliderClass} ref={agentSliderRef}>
        {items.map((item) => (
          <li className={liClass} key={item.id}>
            <div
              className={backgroundClass}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={`${backgroundClass}-info`}>
                <h1 className={nameClass}>{item.info.name}</h1>
                <p className={descriptionClass}>{item.info.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}