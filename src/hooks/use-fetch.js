import {useCallback, useState} from "react";
import cartContext from "../store/CartContext/cart-context";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const sendRequest = useCallback(async (url, getter, final = null, method = 'GET', data = {}) => {
    const init = {}
    let errorMessage = 'Error while loading data...'
    if(method === 'POST') {
      init.method = 'POST'
      init.headers = {
        'Content-Type': 'application/json'
      }
      init.body = JSON.stringify(data)
      errorMessage = 'Error while sending data...'
    }

    setIsLoading(true)

    try {
      const response = await fetch(url, init)
      if(!response.ok) {
        throw new Error(errorMessage)
      }
      const responseData = await response.json()
      getter(responseData)
      setError('')
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false)
    if(final) {
      final()
    }
  }, [])

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useFetch