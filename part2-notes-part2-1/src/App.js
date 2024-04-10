import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const baseUrl = 'http://localhost:3001/api/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    // console.log('effect')
    // axios
    //   .get('http://localhost:3001/notes')
    //   .then(response => {
    //     console.log('promise fulfilled')
    //     setNotes(response.data)
    //   })
    console.log('effect')

    const eventHandler = (response) => {
      console.log('promise fulfilled')
      setNotes(response.data)
    }
  
    const promise = axios.get('http://localhost:3001/notes')
    promise.then(eventHandler)
  }
  
  useEffect(hook, [])

  console.log('render', notes.length, 'notes')

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    // // 使用concat数组方法将新笔记添加到笔记列表中
    // setNotes(notes.concat(noteObject))
    // setNewNote('')
    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
    setNotes(notes.concat(response.data))
    setNewNote('')
    })
  }

  const notesToShow = showAll
                      ? notes
                      : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {
            notesToShow.map(note => <Note key={note.id} note={note} />)
        }
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote}  onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App


