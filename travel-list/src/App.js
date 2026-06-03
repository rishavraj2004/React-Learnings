export default function App() {
  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>

}

function Logo() {
  return (
    <div>
      <h1> Far Away</h1>
    </div>
  )
}


function Form() {
  return (
    <div>
      <div className="add-form">
        <h3>What do you need for you trip</h3>
      </div>

    </div>
  )

}


function PackingList() {
  return (
    <div className="list">
      LIST
    </div>
  )
}


function Stats() {
  return <footer className="stats">
    <em>You have X items on your list, and you already packed X</em>
  </footer>
}