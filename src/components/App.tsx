import './App.sass'
import { Button, GaugeBar } from './atoms'

import thumb_up from '../assets/thumb_up.svg'
import thumb_down from '../assets/thumb_down.svg'

function App() {

  return (
    <div style={{background: 'lightgray'}}>
      <Button onClick={() => console.log('click')} className="primary selected" label="thumb up button">
        <img src={thumb_up} alt="thumb up logo" />
      </Button>

      <Button onClick={() => console.log('click')} className="secondary" label="thumb down button">
        <img src={thumb_down} alt="thumb down logo" />
      </Button>

      <Button onClick={() => console.log('click')} label="Secondary button" type="submit">
        Vote now
      </Button>

      <GaugeBar positive={23} negative={36} />
    </div>
  )
}

export default App
