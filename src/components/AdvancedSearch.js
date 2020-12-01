import React from "react";

const AdvancedSearch = ({ pets, onChange }) => {
  return (
    <>
      <hr className="additional-options" />
      <div className="additional-options">
        <label htmlFor="age">
          Age
          <select name="age" id="age" onChange={onChange}>
            <option value="all">All</option>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <label htmlFor="breed">
          Breeds
          <select name="breeds" id="breeds">
            <option value="">Any</option>
            {pets.map((pet) => {
              return (
                <option key={pet.id} value={pet.breeds.primary}>
                  {pet.breeds.primary}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </>
  );
};

export default AdvancedSearch;
