import React, { useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";

const SearchPets = () => {
  const client = new Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET,
  });

  useEffect(() => {
    client.animal
      .search({ limit: 30, location: `FL`, type: "Dog" })
      .then((res) => {
        console.log(res.data.animals);
      }, console.error);
    client.animalData.types().then((res) => {
      console.log(res.data.types);
    }, console.error);
  }, []);

  return (
    <div className="search-pets">
      <h1>Getting that data!</h1>
    </div>
  );
};

export default SearchPets;
