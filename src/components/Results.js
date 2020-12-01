import React from "react";

export const Results = ({ pets }) => {
  return (
    <ul className="results-list">
      {pets.map((pet) => {
        console.log(pet);
        return (
          <li key={pet.id}>
            <h2>{pet.name}</h2>
            <h4>
              {pet.type} <span>- {pet.age}</span>
            </h4>
            {pet.photos.length > 0 ? (
              <img src={pet.photos[0].medium} alt="cutie pie" />
            ) : (
              <img
                src="http://via.placeholder.com/400/400"
                alt="no picture :("
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
