import React from "react";
import "./Card.css"; // Assurez-vous de créer ce fichier CSS

function Card(props) {
  return (
    <div className="polaroid-card">
      <img
        className="mosaicsimg"
        src={"http://localhost:8000/images/" + props.item.img_url}
        alt={props.item.title}
        loading="lazy"
      />
      <div className="polaroid-content">
      <div className="polaroid-title kaushan-script-regular">{props.item.title}</div>
      <div className="polaroid-labels inter-regular">
        {props.item.label.map((label, index) => (
          <span key={index} className="polaroid-label">
            {label}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Card;