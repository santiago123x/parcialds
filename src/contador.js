import react, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";

const Contador = ({ propNum, name }) => {
  const [cuenta, setCuenta] = useState(propNum);
  const [mode, setMode] = useState(false);

  return (
    <div className="p-5">
      <Header mode={mode} />
      <h3 className="mb-3">{mode ? "DarkMode" : "LightMode"}</h3>
      <button className="btn btn-primary mb-4" onClick={() => setMode(!mode)}>
        Change Mode
      </button>
      <Formulario />
    </div>
  );
};

Contador.propTypes = {
  propNum: PropTypes.number.isRequired,
};

export default Contador;
