import AgentsSection from "../components/homepage/AgentsSection";
import HeroSection from "../components/homepage/HeroSection";
import MapsSection from "../components/homepage/MapsSection";
import WeaponsSection from "../components/homepage/WeaponsSection";
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