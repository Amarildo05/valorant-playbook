import AgentsSection from "./AgentsSection";
import HeroSection from "./HeroSection";
import MapsSection from "./MapsSection";
import WeaponsSection from "./WeaponsSection";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <AgentsSection />
      <WeaponsSection />
      <MapsSection />
    </>
  );
}