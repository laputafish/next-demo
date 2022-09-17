import { createSlice } from '@reduxjs/toolkit'

const createMenu = (options) => {
  const result = []
  const max = options.max
  const count = Math.floor(Math.random() * max) + 1

  const ICON_TAGS = [
    'Adb',
    'AcUnit',
    'AccessTime',
    'AccessibilityNew',
    'AccountBalance',
  ]

  for (let i = 0; i < count; i++) {
    const id = i + 1
    const tagIndex = Math.floor(Math.random() * ICON_TAGS.length)
    // console.log('tagIndex = ' + tagIndex)
    const iconTag = ICON_TAGS[tagIndex]
    // console.log('iconTag = ' + iconTag)
    result.push({
      id: id,
      label: 'Menu Item #' + id,
      iconTag: iconTag,
      itemType: 'form',
    })
  }
  return result
}

const createModules = () => {
  const modules = []
  for (let i = 0; i < 8; i++) {
    const id = i + 1
    const menuItems = createMenu({ max: 12 })

    modules.push({
      id,
      label: 'Module #' + id,
      menuItems,
    })
  }
  return modules
}

const modules = createModules()

const initialState = {
  id: 1,
  name: 'App #1',
  color: 'blue',
  theme: 'light',
  modules,
  selectedModuleId: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedModule: (state, action) => {
      console.log('setSelectedModule. payload: ', action.payload);
      state.selectedModuleId = action.payload
    }
  },
})

export const { setSelectedModule } = appSlice.actions;
export default appSlice.reducer
