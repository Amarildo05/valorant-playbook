import { Link } from "react-router-dom";

export default function AgentsSection() {
  return (
    <div className="agents">
      <h1 className="homepage-title">AGENTS</h1>
      <Link to="/agents">
        <button className="homepage-button">View Agents &gt;</button>
      </Link>
    </div>
  );
}