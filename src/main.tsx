import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './components/App'
import { Provider } from 'urql'
import { client } from './graphql'

import { CharacterProvider, ViewProvider } from './context'

if (import.meta.env.MODE === 'development') { // TODO: use env variables to control it
  // @ts-ignore
  // import('./mocks/browser').then(
  //   ({ worker }) => worker.start()
  // )
}

ReactDOM.render(
  <React.StrictMode>
    <ViewProvider>
      <CharacterProvider>
        <Provider value={client}>
          <App />
        </Provider>
      </CharacterProvider>
    </ViewProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
