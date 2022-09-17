import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1,
  label: 'form 1',
  views: [],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {}
});

export default formSlice.reducer
