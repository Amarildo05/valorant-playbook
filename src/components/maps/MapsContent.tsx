import { mapData } from "../../../projectData";
import Carousel from "../carousel/Carousel";

export default function MapsContent() {
  return (
    <Carousel
      items={mapData.maps}
    />
  );
}