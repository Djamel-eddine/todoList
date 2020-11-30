import React, { useContext, useEffect } from "react";
import Inputs from "./inputs";
import List from "./List";
import "./css/App.css";
import { Provider } from "./context/context";
import axios from "axios";

function App() {
  const { data, setData } = useContext(Provider);
  useEffect(() => {
    const fetchData = async function () {
      let request_url = "http://localhost:4000/data?id=4321";
      let result = await axios.get(request_url);
      console.log(result);
      setData({ type: "init", data: result.data });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Inputs />
      <List todoList={data} />
    </div>
  );
}

export default App;
