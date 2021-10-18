import './App.sass'
import { GaugeBar } from './atoms'
import { VoteForm } from './molecules'
import { Card } from './organisms'


function App() {
  const cardData = {
      name: "Kanye West",
      description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
      category: "entertainment",
      picture: "kanye.png",
      lastUpdated: "2020-03-10T23:08:57.892Z",
      votes: {
          positive: 23,
          negative: 36
      }
  }
  return (
    <div style={{background: 'lightgray'}}>
      <Card {...cardData} />

      <VoteForm
        onSubmit={() => console.log('submit')}
        className=""
        label="form vote"
      />

      <GaugeBar positive={23} negative={36} />
    </div>
  )
}

export default App
