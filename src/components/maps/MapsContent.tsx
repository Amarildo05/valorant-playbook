import "../carousel.css";
import { mapData } from "../../../projectData";
import Carousel from "../carousel/Carousel";

export default function MapsContent() {
  return (
    <Carousel
      items={mapData.maps}
      sliderClass="carousel-slider"
      liClass="carousel-li"
      backgroundClass="carousel-item"
      nameClass="carousel-name"
      descriptionClass="carousel-description"
    />
  );
}