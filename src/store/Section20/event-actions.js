import {eventActions} from "./events-slice";

export const fetchEventData = () => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/events.json')
      if(!response.ok) {
        throw new Error("Can't fetch data")
      }
      return await response.json()
    }

    try {
      const data = await sendRequest()
      console.log(data);
      dispatch(eventActions.load(data || []))
    }catch (error) {
      // todo: add a modal to show errors
      console.error(error)
    }

  }
}

export const saveEventData = event => {
  return async dispatch => {
    event.isDeleted = false

    const sendRequest = async () => {
      const response = await fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/events.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })

      if(!response.ok) {
        throw new Error("Can't send event data")
      }

      return await response.json()
    }

    try {
      const data = await sendRequest()
      event.id = data.name
      dispatch(eventActions.add(event))
    }catch (error) {
      // todo: We may consider adding a modal to inform in case there an error
      console.error(error)
    }
  }
}

export const deleteEvent = eventId => {
  return async dispatch => {

  }
}