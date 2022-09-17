import { configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/appSlice';
import calendarReducer from './slices/calendarSlice';
import chartPanelReducer from './slices/chartPanelSlice';
import formReducer from './slices/formSlice';
import inputPanelReducer from './slices/inputPanelSlice';
import widgetSectionReducer from './slices/widgetSectionSlice';
import widgetReducer from './slices/widgetSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    calendar: calendarReducer,
    form: formReducer,
    inputPanel: inputPanelReducer,
    chartPanel: chartPanelReducer,
    widgetSections: widgetSectionReducer,
    widgets: widgetReducer
  }
})
