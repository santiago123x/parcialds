//Santiago Calderón 1842025
import Contador from "./contador";
import React from "react";
import ReactDOM from "react-dom";

const divRoot = document.querySelector("#root");

ReactDOM.render(<Contador name="Santiago Calderón" propNum={10} />, divRoot);
