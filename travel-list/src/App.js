import { useState } from "react";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "mobile", quantity: 1, packed: true },
];


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

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // reset form after submit
    setDescription("")
    setQuantity(1)

  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for you trip</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {/* automatically generate 20  list numbers */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
        </select>
        <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        {/* This call back function in onchange is used to read the value which is entered in the  from */}
        <button>Add</button>
      </form>

    </div>
  )

}

function PackingList() {
  return (
    <div className="list">

      <ul >
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}


function Stats() {
  return <footer className="stats">
    <em>You have X items on your list, and you already packed X</em>
  </footer>
}