import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export const useFetchData = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  return {
    data,
    pending: isLoading,
    run: async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(`response error. status code : ${response.status}`);
          return;
        }
        const data = await response.json();
        setData(data.reverse());
      } catch (e) {
        console.error('exeception occured!!', e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
  };
};

export const usePostData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  return {
    pending: isLoading,
    error,
    run: async (url, data) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          setError(`response error. status code : ${response.status}`);
          return;
        }
        console.log('response: ', response);
      } catch (e) {
        console.err(e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
  };
};

// ref: https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests
export const useDeleteData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  return {
    pending: isLoading,
    error,
    run: async (url, id) => {
      try {
        const response = await fetch(url + `/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          setError(`response error. status code : ${response.status}`);
          return;
        }
        console.log('response: ', response);
      } catch (e) {
        console.err(e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
  };
};

// ref: https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests
export const useEditData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  return {
    pending: isLoading,
    error,
    run: async (url, id, data) => {
      try {
        const response = await fetch(url + `/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            ...data,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          setError(`response error. status code : ${response.status}`);
          return;
        }
        console.log('response: ', response);
      } catch (e) {
        console.error(e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
  };
};
