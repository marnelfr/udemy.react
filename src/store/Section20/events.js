import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  events: [
    { id: 'event-1', image: 'https://via.placeholder.com/200', title: 'Event 1', date: '05-02-2023', isDeleted: false },
    { id: 'event-2', image: 'https://via.placeholder.com/200', title: 'Event 2', date: '25-02-2023', isDeleted: false },
    { id: 'event-3', image: 'https://via.placeholder.com/200', title: 'Event 3', date: '02-03-2023', isDeleted: false },
  ]
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    add(state, action) {

    },
  }
})

export const eventActions = eventSlice.actions

const eventReducer = eventSlice.reducer
export default eventReducer