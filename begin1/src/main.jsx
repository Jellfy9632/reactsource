import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyComponent from "./MyComponent.jsx";
import Book from "./Book.jsx";
import MyFunction from "./MyFunction.jsx";
import MyStyle from "./MyStyle.jsx";
import InputSample from "./InputSample.jsx";
import InputMultipleSample from "./InputMultipleSample.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
