import { Link } from "react-router-dom";

export default function AgentsSection() {
  return (
    <div className="agents">
      <h1>AGENTS</h1>
      <Link to="/agents">
        <button>View Agents &gt;</button>
      </Link>
    </div>
  );
}