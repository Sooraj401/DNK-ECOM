import React from "react";
import Banner2 from "../assets/banner2.jpg";
import ProductGrid from "../components/ProductGrid";

const AllProducts = () => {
  return (
    <div>
      <div className="w-full bg-gray-100 flex flex-col justify-start items-center">
        <div
          className="w-full flex flex-col justify-center items-center h-[250px] lg:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Banner2})` }}>
          <h1 className="text-3xl lg:text-5xl text-red-950 font-bold text-center px-4 lg:px-0">
            #ALL PRODUCTS
          </h1>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default AllProducts;