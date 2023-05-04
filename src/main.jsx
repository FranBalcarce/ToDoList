import React from "react";
import ReactDOM from "react-dom/client";
import ToDoApp from "./components/toDoApp";
import { GlobalStyles } from "../styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <ToDoApp />
  </>
);
