import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1,
  label: 'Input Panel 1',
  views: [],
}

export const inputPanelSlice = createSlice({
  name: 'inputPanel',
  initialState,
  reducers: {},
})

export default inputPanelSlice.reducer
