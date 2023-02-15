import {useState} from "react";

const useFetch = (url, method = 'GET') => {
  let fetchData
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  fetchData = async (confBody = null) => {
    setIsLoading(true);
    setError(null);
    let responseData

    try {
      let init = (method === 'POST') ? {
        method: 'POST',
        body: JSON.stringify({ text: confBody }),
        headers: {
          'Content-Type': 'application/json',
        }
      } : null

      const response = await fetch(url, init);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      responseData = await response.json();
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);

    return responseData
  }

  return [isLoading, error, fetchData]
}

export default useFetch