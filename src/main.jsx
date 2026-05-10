import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import GalleryCategory from "./pages/category";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/gallery/:category",
    element: <GalleryCategory />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
