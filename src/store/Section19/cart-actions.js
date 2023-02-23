import {cartActions} from "./cart-slice";

export const sendCartData = (items) => {
  return async (dispatch) => {
    console.log('Start sending data to backend...')

    const sendRequest = async () => {
      const response = await fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(items)
      })
      if(!response.ok) {
        throw new Error("Can't send data to backend")
      }
    }

    try {
      await sendRequest()
      console.log('Data sent to the backend successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/cart.json')
      if(!response.ok) {
        throw new Error("Can't fetch data")
      }
      return await response.json()
    }

    try {
      const data = await sendRequest()
      const cartData = data || []
      dispatch(cartActions.replaceState(cartData))
    } catch(error) {
      console.error(error);
    }
  }
}