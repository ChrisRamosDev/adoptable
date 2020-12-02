import React from "react";
import { Link, Router } from "@reach/router";

import Logo from "../images/Adoptable.png";
import SearchPets from "./SearchPets";
import Details from "./Details";

const App = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="adoptable" className="header-logo" />
        </Link>
      </header>
      <Router>
        <SearchPets path="/" />
        <Details path="/details/:id" />
      </Router>
      <footer>
        <h2>©2020 Chris Ramos Dev</h2>
      </footer>
    </>
  );
};

export default App;
