import React, { useState, useContext } from "react";
import { Provider } from "./context/context";
import "./css/inputs.css";

export default function Inputs({ manipulateList }) {
  const [TodoName, setTodoName] = useState("");
  const [Description, setDescription] = useState("");
  const [Time, setTime] = useState("");
  let newItem = {
    todoname: TodoName,
    time: Time,
    description: Description,
  };
  const { setData } = useContext(Provider);

  return (
    <div className="inputs-container">
      <h2>Todo List</h2>
      <form>
        <input
          type="text"
          name="todo-frame"
          id="todo-frame"
          value={TodoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="what to do"
        />
        <input
          type="time"
          name="time-area"
          id="time-area"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
        />
        <textarea
          name="todo-description"
          id="description"
          cols="30"
          rows="10"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            setData({ type: "add", newItem });
            setTodoName("");
            setTodoName("");
            setTodoName("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
