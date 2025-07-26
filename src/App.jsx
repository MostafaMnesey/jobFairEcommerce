import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/Layout/Layout";
import Home from "./Components/Home/Home";
import AllProducts from "./Components/AllProducts/AllProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
function App() {
  // ✅ اقرأ قيمة الوضع من localStorage أول مرة بس
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // ✅ كل ما الوضع يتغير، حدث class و خزنه
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  // ✅ إضافة زر لتغيير الوضع   
  

  return (
    <>
      <button
        className="fixed top-[95%] right-[1%] z-40 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <FaRegMoon className="text-yellow-500" />
        ) : (
          <CiSun className="text-gray-500" />
        )}
      </button>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}


export default App;
