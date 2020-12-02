import React from "react";
import { Pet } from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="results-list show-results">
      {pets.map((pet) => {
        return (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            age={pet.age}
            media={pet.photos}
            size={pet.size}
            breed={pet.breeds.primary}
          />
        );
      })}
    </div>
  );
};

export default Results;
