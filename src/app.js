import Header from "./Componentes/Header";
import ListCards from "./Componentes/TareaCustomHook/ListCards";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import useGet from "./Hooks/useGet";
import "./index.css";

const App = () => {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [url, setURL] = useState(
    `https://rickandmortyapi.com/api/character/?page=1`
  );
  const { data, loading, error } = useGet(url);

  useEffect(() => {
    mode ? setTheme("dark") : setTheme("light");
  }, [mode]);

  const botones = (
    <div className="cont-but">
      {data && data.info && data.info.prev ? (
        <Button
          className="font-weight-bold"
          color={mode ? "info" : "secondary"}
          onClick={() => {
            setURL(data.info.prev);
          }}
        >{`Anterior pagina`}</Button>
      ) : (
        <div></div>
      )}
      {data && data.info && data.info.next ? (
        <Button
          className="font-weight-bold butt"
          color={mode ? "info" : "secondary"}
          onClick={() => {
            setURL(data.info.next);
          }}
        >{`Siguiente pagina`}</Button>
      ) : (
        <div></div>
      )}
    </div>
  );

  return (
    <div className={`app-contenedor ${theme}`}>
      <Header
        name="Santiago Calderón - 1842025"
        mode={mode}
        setMode={setMode}
      />

      {!loading && botones}

      <ListCards data={data} loading={loading} error={error} />
      {!loading && botones}
    </div>
  );
};

export default App;
