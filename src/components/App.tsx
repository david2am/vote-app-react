import './App.sass'
import { Main } from './organisms'
import { useQuery } from 'urql'
import { CharactersQuery } from '../graphql'


function App() {
  const [result] = useQuery({ query: CharactersQuery })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default App
