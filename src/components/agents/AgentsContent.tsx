import { agentsData } from "../../../projectData";
import "./AgentsContent.css";
import { Agent } from "../../../types";

export default function AgentsContent() {
  return (
    <div className="agents-container">
      <button className="slide-btn" id="slide-btn-left">
        &#8249;
      </button>
      <button className="slide-btn" id="slide-btn-right">
        &#8250;
      </button>
      <ul className="agent-slider" id="agent-slider">
        {agentsData.agents.map((agent: Agent) => (
          <li className="agent-li" key={agent.id}>
            <div
              className="agents-li"
              style={{ backgroundImage: `url(${agent.image})` }}
            >
              <div className="agent-info">
                <h1 className="agent-name">{agent.info.name}</h1>
                <p className="agent-description">{agent.info.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}