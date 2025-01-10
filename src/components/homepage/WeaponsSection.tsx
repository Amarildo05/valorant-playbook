import { Link } from "react-router-dom";

export default function WeaponsSection() {
  return (
    <div className="weapons">
      <h1 className="homepage-title">WEAPONS</h1>
      <Link to="/weapons">
        <button className="homepage-button">View Weapons &gt;</button>
      </Link>
    </div>
  );
}