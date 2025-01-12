import { mapData } from "../../../projectData";
import "./MapsContent.css";

export default function MapsContent() {
  return (
    <div>
      <button className="slide-btn" id="slide-btn-left">
        &#8249;
      </button>
      <button className="slide-btn" id="slide-btn-right">
        &#8250;
      </button>
      <ul className="map-slider" id="map-slider">
        {mapData.maps.map((map, index) => (
          <li key={index} className="map-li">
            <div
              className="maps-li"
              style={{ backgroundImage: `url(${map.image})` }}
            >
              <div className="map-info">
                <h1 className="map-name">{map.info.name}</h1>
                <p className="map-description">{map.info.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}