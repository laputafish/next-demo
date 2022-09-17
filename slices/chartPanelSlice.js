import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1,
  label: 'Chart Panel 1',
  views: [],
}

export const chartPanelSlice = createSlice({
  name: 'chartPanel',
  initialState,
  reducers: {},
})

export default chartPanelSlice.reducer
