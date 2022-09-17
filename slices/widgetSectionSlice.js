import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    label: 'Basic',
    icon: '',
    widgets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    id: 2,
    label: 'Advanced',
    icon: '',
    widgets: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    id: 3,
    label: 'Special',
    icon: '',
    widgets: [22, 23, 24],
  },
  {
    id: 4,
    label: 'Relation',
    icon: '',
    widgets: [25, 26, 27, 28, 29],
  },
]

export const widgetSectionSlice = createSlice({
  name: 'widgetSections',
  initialState,
  reducers: {},
})

export default widgetSectionSlice.reducer
