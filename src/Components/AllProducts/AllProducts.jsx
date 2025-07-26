import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from "flowbite-react/helpers/get";
import React from "react";
import Loading from "../Loading/Loading";
import Products from "./Products/Products";
import SearchBar from "./SearchBar";

export default function AllProducts() {
  const getProducts = async () => {
    return await axios.get("https://fakestoreapi.com/products");
  };
  const { data,isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data,"isLoading", isLoading);

  return <>
  {
    isLoading?<Loading />: <div className="bg-white dark:bg-black pt-12">
      
      <Products data={data?.data} /></div>
  }
  </>;
}
