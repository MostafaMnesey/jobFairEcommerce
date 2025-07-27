import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm  bg-white h-[110%] group/btn relative overflow-hidden  rounded-lg dark:bg-black ">
      <a href="#">
        <div className="relative">
          <img
            className="rounded-t-lg r h-52 flex justify-center items-center w-full"
            src={product?.image}
            alt="product image"
          />
          <span className="bg-main absolute top-[100%] left-[50%] -translate-x-1/2 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-main dark:text-white">
            {product?.category}
          </span>
        </div>
      </a>
      <div className="p-5  ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          to={`/products/${product?.id}`}
          className="inline-flex absolute z-10 -top-[200%] group-hover/btn:top-[2%] mt-2 transition-all right-[1%] items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-full hover:bg-main/80 focus:ring-4-main focus:outline-none focus:ring-bg-main dark:bg-bg-main dark:hover:bg-bg-main/80 dark:focus:ring-bg-main"
        >
          Show Details
        </Link> 
        <div className="flex items-center mt-4">
          <FaStar className="text-yellow-500">
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
              {product?.rating.rate} ({product?.rating.count} reviews)
            </span>
          </FaStar>
        </div>
        <div classname>
          <span className="text-2xl my-2 font-bold text-gray-900 dark:text-white">
            ${product?.price}
          </span>
        </div>
      </div>
    </div>
  );
}
