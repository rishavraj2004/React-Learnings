import { useState } from "react";


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "mobile", quantity: 1, packed: true },
// ];


export default function App() {
  // THIS USE STATE IS IN THE APP BECAUSE I WANT TO USE IT IN THE PACKINGLIST WHICH IS THE PARENT CLASS OF THE APP
  //This is basically lifting up state 
  const [items, setItems] = useState([]);


  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleTogggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))

  }



  return <div className="app">
    <Logo />
    {/* sending props in form */}
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onTogggleItems={handleTogggleItem} />
    <Stats items={items} />
  </div>

}

function Logo() {
  return (
    <div>
      <h1> Far Away</h1>
    </div>
  )
}


function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);




  function handleSubmit(e) {
    e.preventDefault();


    const newItem = { description, quantity, packed: false, id: Date.now() }

    if (!description) return;
    onAddItems(newItem)
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

function PackingList({ items, onDeleteItem, onTogggleItems }) {

  // sort
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


  return (
    <div className="list">

      <ul >
        {sortedItems.map((item) => (
          <Item key={item.id} onDeleteItem={onDeleteItem} item={item} onTogggleItems={onTogggleItems} />
        ))}
      </ul>

      <div>
        <select className="actions" onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description order</option>
          <option value='packed'>Sort by packed order</option>
        </select>
      </div>



    </div>
  );
}

function Item({ item, onDeleteItem, onTogggleItems }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onTogggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}


function Stats({ items }) {

  if (!items.length) return (
    <p className="stats">
      <em>Start adding some items to you packing list</em>
    </p>
  )


  //for stats of number of products derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100)
  return <footer className="stats">
    <em>
      {percentage === 100 ? 'You gt everything ready to go- >' :
        `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
      }
    </em>
  </footer>
}