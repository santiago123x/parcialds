import React, { useState } from "react";
import PropTypes from "prop-types";
const Calculadora = ({ num1, num2, nombre }) => {
  const [result, setResult] = useState(0);
  return (
    <div>
      <h2>{`Señor ${nombre} la suma o resta es ${result}`}</h2>
      <button
        onClick={() => {
          setResult(num1 + num2);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setResult(num1 - num2);
        }}
      >
        Restar
      </button>
    </div>
  );
};

Calculadora.propTypes = {
  nombre: PropTypes.string.isRequired,
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
};

export default Calculadora;
