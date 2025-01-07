import Agents from "../components/agents/Agents";
import Hero from "../components/homepage/Hero";
import Maps from "../components/maps/Maps";
import Weapons from "../components/weapons/Weapons";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Agents />
      <Weapons />
      <Maps />
    </>
  );
}