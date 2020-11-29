import React from "react";
import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_API_SECRET,
});

client.animal
  .search({
    limit: 30,
    location: "FL",
  })
  .then((res) => {
    let arr = res.data.animals;
    console.log(arr);
  })
  .catch((err) => console.error(err));

const App = () => {
  return (
    <div>
      <h1>I'm working now</h1>
    </div>
  );
};

export default App;
