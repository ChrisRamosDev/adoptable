import React, { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchPets = () => {
  const pet = new Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET,
  });

  let typeOptions = ["Dog", "Cat"];
  let ageOptions = ["baby", "young", "adult", "senior"];
  let limitAmount = [30, 50, 70, 100];

  const [location, setLocation] = useState("Orlando");
  const [breeds, setBreeds] = useState([]);
  const [type, TypeDropdown] = useDropdown("Type", "Dog", typeOptions);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [age, AgeDropdown] = useDropdown("Age", "", ageOptions);
  const [pets, setPets] = useState([]);
  const [limit, LimitDropdown] = useDropdown(
    "Total search results",
    30,
    limitAmount
  );

  const requestPetData = async () => {
    console.log("requesting data...");
    await pet.animal
      .search({
        limit: limit,
        location: location ? `${location}, FL` : "FL",
        type: type,
        breed: breed,
        age: age,
        status: "adoptable",
      })
      .then((res) => {
        const animals = res.data.animals;
        setPets(animals || []);
      }, console.error);
  };

  // api call for pet data
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.animalData.breeds(type).then((res) => {
      const breedNames = res.data.breeds.map(({ name }) => name);
      setBreeds(breedNames);
    }, console.error);
  }, [type, setBreed, setBreeds]);

  return (
    <div className="search-pets mq-flex">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          requestPetData();
        }}
      >
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
        <TypeDropdown />
        <BreedDropdown />
        <AgeDropdown />
        <LimitDropdown />
        <button>Search</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchPets;
