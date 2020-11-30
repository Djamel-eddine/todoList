import React, { useContext } from "react";
import Item from "./Item";
import { Provider } from "./context/context";

export default function List() {
  const { data } = useContext(Provider);
  return (
    <div className="TodoList">
      {data.map((item, i) => (
        <Item
          name={item.todoname}
          description={item.description}
          time={item.time}
          isDone={item.isDone}
          key={i}
        />
      ))}
    </div>
  );
}
