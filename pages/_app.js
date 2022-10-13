import '../styles/globals.css';

import withRedux from 'next-redux-wrapper'

import { Provider } from 'react-redux'
import { initStore } from '../redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={initStore}>
      <Component {...pageProps} />
    </Provider>
  )
  // return <Component {...pageProps} />
}

export default MyApp
