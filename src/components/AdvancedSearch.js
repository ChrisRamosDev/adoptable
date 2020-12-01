import React from "react";

const AdvancedSearch = ({ pets, onChange }) => {
  return (
    <>
      <hr className="additional-options" />
      <div className="additional-options">
        <label htmlFor="age" className="spacer">
          Age
          <select name="age" id="age" onChange={onChange} className="spacer">
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
            {pets.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>
      </div>
    </>
  );
};

export default AdvancedSearch;
