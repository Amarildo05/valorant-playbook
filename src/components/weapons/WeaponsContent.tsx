import { weapons } from "../../../projectData";
import Carousel from "../carousel/Carousel";

export default function WeaponsContent() {
  return (
    <Carousel
      items={weapons}
    />
  );
}