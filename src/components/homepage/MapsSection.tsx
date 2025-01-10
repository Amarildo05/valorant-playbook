import { Link } from "react-router-dom";

export default function MapsSection() {
  return (
    <div className="maps">
      <h1 className="homepage-title">MAPS</h1>
      <Link to="/maps">
        <button className="homepage-button">View Maps &gt;</button>
      </Link>
    </div>
  );
}