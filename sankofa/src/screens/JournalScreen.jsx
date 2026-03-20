import { useState } from 'react'
import { T, playfair } from '../styles/theme'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'

export default function JournalScreen() {
  const { navigate } = useApp()

  const [notes, setNotes] = useState([
    {
      word: "Akwaaba",
      meaning: "Welcome",
      note: "Used when greeting visitors"
    }
  ])

  const [newWord, setNewWord] = useState("")
  const [newMeaning, setNewMeaning] = useState("")
  const [newNote, setNewNote] = useState("")

  const handleAddNote = () => {
    if (!newWord) return

    const newEntry = {
      word: newWord,
      meaning: newMeaning,
      note: newNote
    }

    setNotes([newEntry, ...notes])

    // clear inputs
    setNewWord("")
    setNewMeaning("")
    setNewNote("")
  }

  const handleDelete = (index) => {
    const updated = notes.filter((_, i) => i !== index)
    setNotes(updated)
  }

  const inputStyle = {
    padding: '12px',
    borderRadius: 10,
    border: `1px solid ${T.border}`,
    width: '100%',
    outline: 'none'
  }

  return (
    <div style={{ background: T.cream, minHeight: '100vh' }}>
      
      <StatusBar />

      {/* Header */}
      <div style={{
        padding: '20px',
        background: T.black,
        color: 'white'
      }}>
        <h2 style={{ ...playfair }}>My Journal 📖</h2>
      </div>

      {/* Content */}
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Add New Note */}
        <input
          style={inputStyle}
          placeholder="Word"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="Meaning"
          value={newMeaning}
          onChange={(e) => setNewMeaning(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="Your note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        <BtnPrimary onClick={handleAddNote}>
          Add Note
        </BtnPrimary>

        {/* Notes List */}
        <div style={{ marginTop: 20 }}>
          {notes.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: 15,
                borderRadius: 12,
                marginBottom: 10,
                border: `1px solid ${T.border}`
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: 16 }}>
                {item.word}
              </div>

              <div style={{ color: T.gold }}>
                {item.meaning}
              </div>

              <div style={{ marginTop: 6 }}>
                {item.note}
              </div>

              <button
                onClick={() => handleDelete(index)}
                style={{
                  marginTop: 10,
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '6px 10px',
                  borderRadius: 6,
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}