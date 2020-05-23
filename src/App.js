import React from "react";
import "./styles.css";
import Counter from "./Component/Counter"
import Todo from "./Component/Todo"

export default function App() {
  return (
    <div className="App">
      <h1>react Redux</h1>
      {/* <Counter/> */}
      <Todo/>
    </div>
  );
}
