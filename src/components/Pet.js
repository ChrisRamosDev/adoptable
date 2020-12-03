import React from "react";
import placeholder from "../images/placeholder-dog.png";
import { Link } from "@reach/router";

export function Pet({ name, breed, media, id, age, size }) {
  return (
    <Link to={`/details/${id}`} className="pet">
      <div key={id} className="pet-result">
        <h4 className="pet-age">{age}</h4>
        <div className="image-container">
          <img src={media.length ? media[0].medium : placeholder} alt={name} />
        </div>
        <div className="info">
          <h2 className="pet-name">{name}</h2>
          <h4 className="pet-size">{size}</h4>
          <h3 className="pet-breed">{breed}</h3>
        </div>
      </div>
    </Link>
  );
}
