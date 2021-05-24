import { useEffect, useState } from "react";
import { API_URL } from "../constant";

const GROCERIES_URL = `${API_URL}/groceries`;

export const useGroceries = (q?: string) => {
  const [data, setData] = useState<IGrocery[]>([]);
  const [error, setError] = useState<Error | string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const url = q ? `${GROCERIES_URL}?name_like=${q}` : GROCERIES_URL;

    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch(setError);

    return () => {};
  }, [q]);

  return {
    isLoading,
    error,
    data,
  };
};

export const useGrocery = (id: string | number) => {
  const [data, setData] = useState<IGrocery | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${GROCERIES_URL}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch(setError);

    return () => {};
  }, [id]);

  return {
    isLoading,
    error,
    data,
  };
};
