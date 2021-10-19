import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './components/App'
import { Provider } from 'urql'
import { client } from './graphql'

import CharacterProvider from './context/CharacterProvider'

if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  import('./mocks/browser').then(
    ({ worker }) => worker.start()
  )
}

ReactDOM.render(
  <React.StrictMode>
    <CharacterProvider>
      <Provider value={client}>
        <App />
      </Provider>
    </CharacterProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
