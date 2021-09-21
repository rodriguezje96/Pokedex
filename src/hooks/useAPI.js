import { useState, useEffect } from "react";
import axios from "axios";

function useAPI(url) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
          setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
}

export default useAPI;