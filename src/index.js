import { render } from "react-dom";
import React from "react";
import TodoList from "./pages/TodoList";
import './style/index.css';
render(
  <div>
    <TodoList />
  </div>,
  document.querySelector("#root")
);