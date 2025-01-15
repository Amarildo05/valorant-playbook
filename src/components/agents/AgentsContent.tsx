import "../carousel.css";
import { agentsData } from "../../../projectData";
import Carousel from "../carousel/Carousel";

export default function AgentsContent() {
  return (
    <Carousel
      items={agentsData.agents}
      sliderClass="carousel-slider"
      liClass="carousel-li"
      backgroundClass="carousel-item"
      nameClass="carousel-name"
      descriptionClass="carousel-description"
    />
  );
}