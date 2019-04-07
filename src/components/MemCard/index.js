import React from "react";
import "./style.css";

function MemCard(props) {

  return (
    <div key={props.key} className="card" onClick={() => props.selectCard(props.key)}>
        <img className="image" alt={props.alt} src={props.src} />
    </div>
  );
}

export default MemCard;
