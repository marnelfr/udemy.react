import {useCallback, useState} from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const sendRequest = useCallback(async (url, getter, method = 'GET', data = null) => {
    setIsLoading(true)
    setError('')
    let init = null
    if(method === 'POST') {
      init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    }

    try {
      const response = await fetch(url, init)
      if(!response.ok) {
        throw new Error('Can contact the server!')
      }

      const responseData = await response.json()
      getter(responseData)
    } catch (e) {
      setError(e.error || 'Something went wrong')
    }
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useFetch