import React from "react";
import Pupholder from "../images/placeholder-dog.png";
import Katholder from "../images/placeholder-cat.png";

export const Results = ({ type, pets }) => {
  return (
    <ul className="results-list">
      {pets.map((pet) => {
        return (
          <li key={pet.id} className="pet-result">
            <h4 className="pet-age">{pet.age}</h4>
            {pet.photos.length > 0 ? (
              <img
                src={pet.photos[0].medium}
                alt="cutie pie"
                className="pet-img"
              />
            ) : type === "Dog" ? (
              <img
                src={Pupholder}
                alt="no puppy photo"
                className="pet-img placeholder"
              />
            ) : (
              <img
                src={Katholder}
                alt="no kitty photo"
                className="pet-img placeholder"
              />
            )}
            <h2 className="pet-name">{pet.name}</h2>
            <h4 className="pet-size">{pet.size}</h4>
            <h3 className="pet-breed">{pet.breeds.primary}</h3>
          </li>
        );
      })}
    </ul>
  );
};
