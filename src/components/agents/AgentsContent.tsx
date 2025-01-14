import { useEffect, useRef, useState } from "react";
import { agentsData } from "../../../projectData";
import "./AgentsContent.css";
import { Agent } from "../../../types";

export default function AgentsContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const agentSliderRef = useRef<HTMLUListElement | null>(null);
  const agentWidthRef = useRef<number>(0);

  // Function to move the carousel left, right
  const moveSlider = (direction: number) => {
    if (agentSliderRef.current && agentWidthRef.current) {
      const nextIndex = currentIndex + direction;

      // If the index goes out of bounds, reset it.
      if (nextIndex < 0) {
        setCurrentIndex(agentsData.agents.length - 1);
      } else if (nextIndex >= agentsData.agents.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(nextIndex);
      }
    }
  };

  // Auto slide every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlider(1);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Get agent width after the component mounts to calculate scroll offset
  useEffect(() => {
    if (agentSliderRef.current && agentSliderRef.current.firstChild) {
      const agentWidth = (agentSliderRef.current.firstChild as HTMLElement).clientWidth;
      agentWidthRef.current = agentWidth;
    }
  }, []);

  useEffect(() => {
    if (agentSliderRef.current) {
      const slider = agentSliderRef.current;
      const offset = agentWidthRef.current * currentIndex;
      slider.scrollLeft = offset;
    }
  }, [currentIndex]);

  return (
    <div>
      <button className="slide-btn" id="slide-btn-left" onClick={() => moveSlider(-1)}>
        &#8249;
      </button>
      <button className="slide-btn" id="slide-btn-right" onClick={() => moveSlider(1)}>
        &#8250;
      </button>
      <ul className="agent-slider" ref={agentSliderRef}>
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