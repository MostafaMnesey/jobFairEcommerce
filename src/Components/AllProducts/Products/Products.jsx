import React, { useState } from "react";
import Card from "../../Card/Card";
import SearchBar from "../SearchBar";
import { useLocation } from "react-router";
import noImage from "../../../assets/Images/noProudct.png";

export default function Products({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const loc = useLocation();
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-az":
        return a.title.localeCompare(b.title);
      case "name-za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
  console.log(
    sort,
    "searchQuery",
    searchQuery,
    "filteredProducts",
    filteredProducts
  );

  return (
    <>
      <div className="container mx-auto p-4 min-h-[95vh] bg-white dark:bg-black">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-800 dark:text-white tracking-tight relative">
          <span className="inline-block  relative z-10">All Products</span>
          <span className="absolute bottom-0 left-[50%] w-24 h-1 bg-gradient-to-r from-white to-main rounded-full transform -translate-x-1/2"></span>
        </h2>
        {loc.pathname === "/products" && (
          <SearchBar setSearchQuery={setSearchQuery} setSort={setSort} />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts && sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <div
                key={product.id}
                className=" bg-transparent rounded-lg  p-4 flex flex-col items-center hover:shadow-lg hover:shadow-black/50 border border-b-black dark:border-black transition-shadow dark:hover:shadow-main duration-300"
              >
                <Card product={product} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              <div className="flex flex-col justify-center items-center">
                <img src={noImage} alt="No products found" />
                <span className="text-gray-400">No products found.</span>
              </div>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
