import React, { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
import { Results } from "./Results";

const SearchPets = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("Orlando");
  const [type, setType] = useState("Dog");

  const client = new Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET,
  });

  useEffect(() => {
    client.animal
      .search({ limit: 30, location: `${location}, FL`, type: type })
      .then((res) => {
        setPets(res.data.animals);
      }, console.error);
  }, [type, location]);

  return (
    <div className="search-pets">
      <form>
        <label htmlFor="location">
          Enter City
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={(e) => setType(e.target.value)}
          onBlur={(e) => setType(e.target.value)}
        >
          <option value="Dog">Dogs</option>
          <options value="Cat">Cats</options>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(pets);
          }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchPets;
