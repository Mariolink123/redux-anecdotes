import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVote }) => {
    return (
        <div>
            {anecdote.content}
            <div>
                has {anecdote.votes}
                <button onClick={handleVote}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteLists = () => {
    const dispatch = useDispatch()


    const anecdotes = useSelector(state => state.anecdotes) 
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    const filter = useSelector(state => state.filter )
    console.log(filter)
    let filteredAnecdotes = [...sortedAnecdotes]
    if (filter.length > 0 ) {
        filteredAnecdotes = sortedAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      }

    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote.id, anecdote))
        dispatch(setNotification(`You have voted for ${anecdote.content}`, 2))
      }

    return (
        <div>
            {filteredAnecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleVote={() => handleVote(anecdote)}
                />
            )}
        </div>
    )
}

export default AnecdoteLists