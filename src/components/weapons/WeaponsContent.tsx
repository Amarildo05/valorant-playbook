import "../carousel.css";
import { weapons } from "../../../projectData";
import Carousel from "../carousel/Carousel";

export default function WeaponsContent() {
  return (
    <Carousel
      items={weapons}
      sliderClass="carousel-slider"
      liClass="carousel-li"
      backgroundClass="carousel-item"
      nameClass="carousel-name"
      descriptionClass="carousel-description"
    />
  );
}