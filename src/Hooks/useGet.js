import { useState, useEffect } from "react";

const useGet = (url) => {
  const [response, setResponse] = useState({
    data: {},
    loading: true,
    error: false,
  });

  useEffect(async () => {
    try {
      setResponse({
        ...response,
        loading: true,
      });
      const res = await fetch(url);
      const datos = await res.json();
      setResponse({
        ...response,
        data: datos,
        loading: false,
      });
    } catch (err) {
      setResponse({
        ...response,
        error: true,
        loading: false,
      });
    }
  }, [url]);

  return response;
};

export default useGet;
