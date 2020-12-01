import React, { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
import { Results } from "./Results";
import AdvancedSearch, { ageArray } from "./AdvancedSearch";

const SearchPets = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("Orlando");
  const [type, setType] = useState("Dog");
  const [age, setAge] = useState("");

  const client = new Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET,
  });

  useEffect(() => {
    client.animal
      .search({
        limit: 30,
        location: `${location}, FL`,
        type: type,
        age: age,
      })
      .then((res) => {
        setPets(res.data.animals);
      }, console.error);
  }, [type, location, age]);

  const expandOptions = (e) => {
    e.preventDefault();
    const options = document.querySelectorAll(".additional-options");

    options.forEach((element) => {
      element.classList.toggle("expanded");
    });
  };

  const showResults = (e) => {
    e.preventDefault();
    const results = document.querySelector(".results-list");
    results.classList.toggle("show-results");
  };

  return (
    <div className="search-pets">
      <form className="search-form spacer">
        <label htmlFor="location">
          Enter City
          <br />
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="type">
          Type
          <br />
          <select
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
            onBlur={(e) => setType(e.target.value)}
          >
            <option value="Dog">Dogs</option>
            <option value="Cat">Cats</option>
          </select>
        </label>

        <button id="additional-options_btn" onClick={expandOptions}>
          + Additional Options
        </button>
        <AdvancedSearch
          pets={pets}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button id="search-btn" onClick={showResults}>
          Search
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchPets;
