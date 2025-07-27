import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const getProductDetails = async (id) => {
    return await axios.get(`https://fakestoreapi.com/products/${id}`);
  };
  const { data } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  console.log(data, id);

  return (
    <>
      <div className="bg-white dark:bg-black min-h-screen pt-24 ">
        <div className="container mx-auto">
          <nav className="flex " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:text-main   dark:hover:text-main transition-all duration-300"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:text-main   dark:hover:text-main transition-all duration-300"
                  >
                    All Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:text-main   dark:hover:text-main transition-all duration-300">
                    {data?.data?.category}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/*     <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
          

            <div className=" border border-main h-[80vh]   rounded-3xl  ">
              <div className="  relative ">
                <img
                  className="w-full top-[5%] p-8 left-[5%]  hover:top-0 transition-all hover:left-0 absolute   h-[80vh] hover:p-2 hover:rounded-[5%]  rounded-[10%] "
                  src={data?.data?.image}
                  alt={data?.data?.title}
                />
              </div>
            </div>
         

            <div className="flex flex-col justify-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main dark:text-main">
                {data?.data?.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {data?.data?.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-main dark:text-main">
                  ${data?.data?.price}
                </span>
                <span className="bg-main/10 text-main px-3 py-1 rounded-full text-sm font-medium">
                  {data?.data?.category}
                </span>
                {data?.data?.rating && (
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold text-md">
                    <svg
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    {data?.data?.rating?.rate}{" "}
                    <span className="text-gray-400">
                      ({data?.data?.rating?.count})
                    </span>
                  </span>
                )}
              </div>
              <button className="w-full md:w-1/2 bg-main hover:bg-black text-white font-semibold py-3 rounded-xl transition mb-3">
                Add to Cart
              </button>
              <button className="w-full md:w-1/2 border border-main text-main hover:bg-main hover:text-white font-semibold py-3 rounded-xl transition">
                Buy Now
              </button>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-12">
            {/* Product Image */}
            <div className="relative flex items-center justify-center h-[80vh] bg-gradient-to-br from-main/50 to-main/30 border border-main/20 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden p-6">
              <img
                className="absolute top-1/2 left-1/2 w-[90%] h-[90%]  -translate-x-1/2 rounded-[8%] -translate-y-1/2 transition-transform duration-500 hover:scale-105 hover:rotate-1"
                src={data?.data?.image}
                alt={data?.data?.title}
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-main mb-6 leading-tight">
                {data?.data?.title}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {data?.data?.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-main">
                  ${data?.data?.price}
                </span>

                <span className="bg-main/10 text-main px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  {data?.data?.category}
                </span>

                {data?.data?.rating && (
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold text-md">
                    <svg
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    {data?.data?.rating?.rate}
                    <span className="text-gray-500 dark:text-gray-400">
                      ({data?.data?.rating?.count})
                    </span>
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-1/2 bg-main hover:bg-black text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300">
                  Add to Cart
                </button>

                <button className="w-full sm:w-1/2 border-2 border-main text-main hover:bg-main hover:text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
