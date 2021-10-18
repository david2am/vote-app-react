import './App.sass'
import { Card } from './organisms'

import kanye from '../assets/kanye.png'


function App() {
  const data = {
      id: 1,
      name: "Kanye West",
      description: "Vestibulum diam ante, porttitor a odio eget, rhoncu. Eu velit...",
      category: "entertainment",
      picture: kanye,
      lastUpdated: "2020-03-10T23:08:57.892Z",
      votes: {
          positive: 23,
          negative: 36
      }
  }
  return (
    <>
      <Card {...data} />
    </>
  )
}

export default App
