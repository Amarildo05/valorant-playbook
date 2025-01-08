import { Link } from "react-router-dom";

export default function MapsSection() {
  return (
    <div className="maps">
      <h1 id="h1-maps">MAPS</h1>
      <Link to="/maps">
        <button>View Maps &gt;</button>
      </Link>
    </div>
  );
}