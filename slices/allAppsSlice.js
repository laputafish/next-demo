import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const allAppsSlice = createSlice({
  name: 'allApps',
  initialState,
  reducers: {
    setSelectedModule: (state, action) => {
      console.log('setSelectedModule. payload: ', action.payload)
      state.selectedModuleId = action.payload
    },
  },
})

export const { setSelectedModule } = appSlice.actions
export default allAppsSlice.reducer
