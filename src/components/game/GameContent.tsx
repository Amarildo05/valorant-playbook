import { Link } from "react-router-dom";
import { gameData } from "../../../projectData.ts";
import "./GameContent.css";

export default function GameContent() {
  return (
    <div className="game-container">
      <Link to="/">
        <button className="back-button">&#8249;</button>
      </Link>
      <h1 className="game-title">{gameData.title}</h1>
      <div className="game-content">
        {gameData.description.map((desc, index) => (
          <p key={index}>{desc.text}</p>
        ))}
        <iframe
          width="820"
          height="462"
          src={gameData.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <video autoPlay muted loop id="valorant-video">
        <source src={gameData.backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}