import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPanding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPanding(true);
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error("Something went wrong :(");
        }

        const data = await req.json();
        setData(data);
        setIsPanding(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPanding(false);
      }
    };

    getData();
  }, [url]);
  return { data, error, isPending };
}

export default useFetch;
