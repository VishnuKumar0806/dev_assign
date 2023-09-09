// importing react dependities
import React from "react";

// importing files
import CompanyName from "./Components/CompanyName";
import MenuPage from "./Components/MenuPage";
import './Components/Style.css';
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="main-page">
      <MenuPage />
      <div className="sub-page">
        <CompanyName />
        <UserDetails />
      </div>
    </div>
  );
}

export default App;