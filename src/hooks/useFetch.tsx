import { useState, useEffect, useCallback } from "react";

function useFetch(query: string, page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3e2c64b5ff0fc31dd926dd2cba403a65&page=${page}`);
      await setList((prev: any[]) => [...prev, ...res.results];
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;