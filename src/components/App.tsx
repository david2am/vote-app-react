import './App.sass'
import { Card } from './organisms'

import pope from '../assets/pope-francis.png'


function App() {
  const data = {
      name: "Kanye West",
      description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
      category: "entertainment",
      picture: pope,
      lastUpdated: "2020-03-10T23:08:57.892Z",
      votes: {
          positive: 23,
          negative: 36
      }
  }
  return (
    <div style={{background: 'lightgray'}}>
      <Card {...data} />
    </div>
  )
}

export default App
