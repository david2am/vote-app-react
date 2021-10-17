import './App.sass'
import { Button } from './atoms/Button'

import thumb_up from '../assets/thumb_up.svg'
import thumb_down from '../assets/thumb_down.svg'

function App() {

  return (
    <div style={{background: 'black'}}>
      <Button onClick={() => console.log('click')} className="primary selected" label="thumb up button">
        <img src={thumb_up} alt="thumb up logo" />
      </Button>

      <Button onClick={() => console.log('click')} className="secondary" label="thumb down button">
        <img src={thumb_down} alt="thumb down logo" />
      </Button>

      <Button onClick={() => console.log('click')} label="Secondary button" type="submit">
        Vote now
      </Button>
    </div>
  )
}

export default App
