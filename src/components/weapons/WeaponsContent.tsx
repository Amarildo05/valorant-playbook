import "./WeaponsContent.css";
import { weapons } from "../../../projectData";
import { Weapon } from "../../../types";

export default function WeaponsContent() {
  return (
    <div>
      <button className="slide-btn" id="slide-btn-left">
        &#8249;
      </button>
      <button className="slide-btn" id="slide-btn-right">
        &#8250;
      </button>
      <ul className="weapon-slider" id="weapon-slider">
        {weapons.map((weapon: Weapon) => (
          <li key={weapon.id} className="weapon-li">
            <div
              className="weapons-li"
              style={{ backgroundImage: `url(${weapon.image})` }}
            >
              <div className="weapon-info">
                <h1 className="weapon-name">{weapon.info.name}</h1>
                <p className="weapon-description">{weapon.info.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}