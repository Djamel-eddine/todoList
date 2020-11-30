import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const Provider = createContext();

export function DataProvider(props) {
  const [todoList, dispatch] = useReducer(reducer, []);
  return (
    <Provider.Provider value={{ data: todoList, setData: dispatch }}>
      {props.children}
    </Provider.Provider>
  );
}
