import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteLists from './components/AnecdoteLists'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnectodes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnectodes()) 
  },[dispatch]) 

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