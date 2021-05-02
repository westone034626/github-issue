import { useState, useEffect } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [url]);
  return [data, isLoading];
};

export const usePostData = (url, data) => {
  const [isLoading, setIsLoading] = useState(true);
  return {
    pending: isLoading,
    run: fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false)),
  };
};
