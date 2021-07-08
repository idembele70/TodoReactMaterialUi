import { render } from "react-dom";
import React from "react";
import TodoList from "./components/TodoList";
import './style/index.css';
render(
  <div>
    <TodoList />
  </div>,
  document.querySelector("#root")
);
