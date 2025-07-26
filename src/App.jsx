import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/Layout/Layout";
import Home from "./Components/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children: [
      {
        index: true,
        element:<Home />,
      },
    ],
  },
]);
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
