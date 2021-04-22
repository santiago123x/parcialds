import React from "react";
import "./style.css";
import error from "./404.png";
const Error = () => {
  return (
    <div className="cont-load-error">
      <img src={error} width={400} />
      <h3>Ocurrio un error recargue la pagina...</h3>
    </div>
  );
};

export default Error;
