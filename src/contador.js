import react, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import Calculadora from "./Componentes/pregunta13/Calculadora";

const Contador = ({ name }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [nombre, setNombre] = useState("Santiago");
  const [mode, setMode] = useState(false);

  return (
    <div className="p-5">
      <Header mode={mode} setMode={setMode} />
      <h1>{`Bienvenido a la Calculadora de ${name}`}</h1>
      <br></br>
      <br></br>

      <label>
        {"Nombre :  "}
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br></br>
      <label>
        {"Numero 1 :  "}
        <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      </label>
      <br></br>

      <label>
        {"Numero 2 :  "}
        <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      </label>

      <Calculadora
        num1={parseInt(num1)}
        num2={parseInt(num2)}
        nombre={nombre}
      />
    </div>
  );
};

Contador.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Contador;
