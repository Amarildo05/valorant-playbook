import { agentsData } from "../../../projectData";
import Carousel from "../carousel/Carousel";

export default function AgentsContent() {
  return (
    <Carousel
      items={agentsData.agents}
    />
  );
}