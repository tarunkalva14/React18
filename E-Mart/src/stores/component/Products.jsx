import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import ACs from "./ACs";
import Furniture from "./Furniture";
import Mens from "./Mens";
import Watch from "./Watch";
import Womans from "./Womans";
import Kitchen from "./Kitchen";

const Products = () => {
  return (
    <div className="page-section">
      <Mobiles />
      <Computers />
      <ACs />
      <Furniture />
      <Mens />
      <Womans />
      <Watch />
      <Kitchen />
    </div>
  );
};

export default Products;
