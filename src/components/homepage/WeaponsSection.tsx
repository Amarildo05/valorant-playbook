import { Link } from "react-router-dom";

export default function WeaponsSection() {
  return (
    <div className="weapons">
      <h1 id="h1-weapons">WEAPONS</h1>
      <Link to="/weapons">
        <button>View Weapons &gt;</button>
      </Link>
    </div>
  );
}