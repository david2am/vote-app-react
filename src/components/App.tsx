import './App.sass'
import { GaugeBar } from './atoms'
import { VoteForm } from './molecules'
import { Card } from './organisms'


function App() {

  return (
    <div style={{background: 'lightgray'}}>
      <Card />
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
