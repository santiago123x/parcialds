import React, { useEffect, useState } from "react";
import Mensaje from "./Mensaje";
const Formulario = () => {
  const [form, setForm] = useState({
    nick: "",
    pass: "",
  });
  const { nick, pass } = form;

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>HOLA SOY FORMULARIO</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="nick"
          className="form-control"
          placeholder="NickName"
          autoComplete="off"
          value={nick}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {nick.length > 6 && <Mensaje />}

      <div className="form-group mt-3">
        <input
          type="password"
          name="pass"
          className="form-control"
          placeholder="PassWord"
          autoComplete="off"
          value={pass}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {pass.length > 6 && <Mensaje />}
    </div>
  );
};

export default Formulario;
