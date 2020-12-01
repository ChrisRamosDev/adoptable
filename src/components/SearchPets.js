import React, { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
import { Results } from "./Results";
import AdvancedSearch, { ageArray } from "./AdvancedSearch";

const SearchPets = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("Orlando");
  const [type, setType] = useState("Dog");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");

  const client = new Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET,
  });

  // api call for pet data
  useEffect(() => {
    client.animal
      .search({
        limit: 30,
        location: `${location}, FL`,
        type: type,
        age: age,
        breed: breed,
      })
      .then((res) => {
        setPets(res.data.animals);
      }, console.error);
  }, [type, location, age]);

  // expand additional options inputs
  const expandOptions = (e) => {
    e.preventDefault();
    const options = document.querySelectorAll(".additional-options");

    options.forEach((element) => {
      element.classList.toggle("expanded");
    });
  };

  // display search results
  const showResults = (e) => {
    e.preventDefault();
    const results = document.querySelector(".results-list");
    results.classList.toggle("show-results");
    console.log(pets, age, breed, type);
  };

  // organize breeds into set of unique values
  let petBreeds = [];
  pets.forEach((pet) => {
    petBreeds.push(pet.breeds.primary);
  });
  petBreeds = [...new Set(petBreeds)];

  return (
    <div className="search-pets mq-flex">
      <form className="search-form">
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
          pets={petBreeds}
          onChange={(e) => {
            e.target === "select#age"
              ? setAge(e.target.value)
              : setBreed(e.target.value);
          }}
        />
        <button id="search-btn" onClick={showResults}>
          Search
        </button>
      </form>
      <Results pets={pets} type={type} />
    </div>
  );
};

export default SearchPets;
