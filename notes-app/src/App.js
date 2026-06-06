import { useState } from "react";

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <NoteList />

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

function Form() {
  return (
    <div className="form">
      <form className="add-form">
        <h3 className="form-heading">Add your note!😊</h3>
        <input type="text" placeholder="Type here!" />
        <button className="add-button">Add</button>
      </form>
    </div>
  )
}


function Item() {
  return (
    <li>
      <span>Test</span>
      <span>Date.now()</span>
      <button>Delete</button>
    </li>
  )
}

function NoteList() {
  return (
    <div className="list">
      <ul>
        <Item />
      </ul>
    </div>
  )
}