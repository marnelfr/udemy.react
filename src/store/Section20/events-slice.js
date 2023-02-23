import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  events: []
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    load(state, action) {
      const loadedEvents = []
      for (const key in action.payload) {
        loadedEvents.push({
          id: key,
          ...action.payload[key]
        })
      }
      state.events = [...loadedEvents]
    },
    add(state, action) {
      const newEvent = {...action.payload}
      const id = state.events.length + 1

      newEvent.id = 'event-' + id
      newEvent.isDeleted = false

      state.events.push(newEvent)
    },
    delete(state, action) {
      const event = state.events.find(event => event.id === action.payload)
      if(!event) {
        throw new Error('Event not found')
      }
      event.isDeleted = true
    },
    edit(state, action) {
      const event = state.events.find(event => event.id === action.payload.id)
      if(!event) {
        throw new Error('Event not found')
      }
      event.image = action.payload.image
      event.title = action.payload.title
      event.date = action.payload.date
      event.description = action.payload.description
      event.isDeleted = false
    }
  }
})

export const eventActions = eventSlice.actions

const eventReducer = eventSlice.reducer
export default eventReducer