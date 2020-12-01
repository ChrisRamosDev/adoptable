import React from "react";

import Logo from "../images/Adoptable.png";
import SearchPets from "./SearchPets";

const App = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="adoptable" className="header-logo" />
      </header>
      <SearchPets />
      <footer>
        <h2>©2020 Chris Ramos Dev</h2>
      </footer>
    </>
  );
};

export default App;
