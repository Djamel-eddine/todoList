import React, { useContext } from "react";
import { Provider } from "./context/context";

export default function Item({ name, description, time, isDone }) {
  const { setData } = useContext(Provider);
  return (
    <div className="item-container">
      <h4>{name}</h4>
      <small>{description}</small>
      <p>{time}</p>
      <p>{isDone ? "True" : "false"}</p>
      <button
        onClick={() => {
          setData({ type: "remove", name });
        }}
      >
        remove
      </button>
      <button
        onClick={() => {
          setData({ type: "donne", name });
        }}
      >
        complete
      </button>
    </div>
  );
}
