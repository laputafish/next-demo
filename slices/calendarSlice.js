import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1,
  label: 'Calendar 1',
  views: [],
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
})

export default calendarSlice.reducer
