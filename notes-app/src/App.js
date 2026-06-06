import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNotes(note) {
    setNotes(notes => [...notes, note]);

  }
  function handleDeleteNotes(id) {
    setNotes(notes => notes.filter(note => note.id !== id));
  }
  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list?')
    if (confirmed) setNotes([])
  }




  return (
    <div>
      <Logo />
      <Form onAddNotes={handleAddNotes} />
      <NoteList notes={notes} onDeleteNotes={handleDeleteNotes} onClearList={handleClearList} />
      <Stats notes={notes} />
    </div>
  )
}

function Logo() {
  return (
    <div className="logo">
      <h1 className="logo-heading">Notes</h1>
      <p>Manage your notes with ease!</p>
    </div>
  )
}

function Form({ onAddNotes }) {
  const [description, setDescription] = useState("");



  function handleSubmit(e) {
    e.preventDefault();

    const newNote = { description, id: crypto.randomUUID() }

    if (!description) return;
    onAddNotes(newNote);
    setDescription("")

  }



  return (
    <div className="form">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3 className="form-heading">Add your note!😊</h3>
        <input type="text" placeholder="Type here!" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="add-button">Add</button>
      </form>
    </div>
  )
}


function Item({ number, note, onDeleteNotes }) {
  return (
    <li>
      <h4>{number}</h4>
      <span>{note.description}</span>
      <button
        onClick={() => {
          // console.log("Clicked note:", note);
          onDeleteNotes(note.id);
        }}
      >
        Delete
      </button>
    </li>
  )
}

function NoteList({ notes, onDeleteNotes, onClearList }) {
  return (
    <div className="list">
      <ul>
        {notes.map((note, index) => (

          <Item key={note.id} note={note} number={index + 1} onDeleteNotes={onDeleteNotes} />
        ))}
      </ul>
      <button onClick={onClearList}>Clear List</button>

    </div>
  )
}


function Stats({ notes }) {
  if (!notes.length) {
    return (
      <p className="stats">
        <em>No Notes Yet</em>
      </p>
    );
  }

  const numNotes = notes.length;

  return (
    <footer className="stats">
      <em>
        You have {numNotes} in Your notes manager app
      </em>
    </footer>
  )
}