import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { assertExpressionStatement } from "@babel/types";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setdata] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((result) => setdata(result.data));
  }, []);

  return <div className="App">{data}</div>;
}

export default App;
