import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './components/App'
import { Provider } from 'urql'
import { client } from './graphql'

if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  import('./mocks/browser').then(
    ({ worker }) => worker.start()
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
