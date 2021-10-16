import './App.sass'
import { Button } from './atoms/Button'

function App() {

  return (
    <>
      <Button onClick={() => console.log('click')} className='primary'>
        Some text
      </Button>
    </>
  )
}

export default App
