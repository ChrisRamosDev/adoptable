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
    </>
  );
};

export default App;
