import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteLists from './components/AnecdoteLists'
import Notification from './components/Notification'
import Filter from './components/Filter'


const App = () => {


  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteLists />
      <AnecdoteForm />
    </div>
  )
}

export default App