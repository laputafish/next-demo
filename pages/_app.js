import '../styles/globals.css'
// import { ThemeProvider } from '@material-tailwind/react'

import { store } from '../store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
