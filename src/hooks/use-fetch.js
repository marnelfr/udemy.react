import {useCallback, useState} from "react";

const useFetch = (baseUrl= null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method = 'GET', confBody = null) => {
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

      if(baseUrl) {
        url = baseUrl + url
      }
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
  }, [baseUrl])

  return [isLoading, error, sendRequest]
}

export default useFetch