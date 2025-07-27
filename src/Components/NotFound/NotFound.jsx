import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center px-6">
        <h1 className="text-[120px] font-extrabold text-main leading-none">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you’re looking for doesn’t exist or has been moved. Please go
          back to the homepage.
        </p>
        <Link
          to="/"
          className="bg-main hover:bg-black text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
