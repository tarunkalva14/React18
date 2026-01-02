import React from "react";
import NavBar from "../component/NavBar";
import Products from "../component/Products";

const LandPage = () => {
  return (
    <div>
      <NavBar />
      <div className="page-section">
        <Products />
      </div>
    </div>
  );
};

export default LandPage;
