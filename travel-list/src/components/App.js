import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";
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

  function handleClearList(item) {
    const confirmed = window.confirm('Are you sure want to cleat list?')

    if (confirmed) setItems([])
  }




  return <div className="app">
    <Logo />
    {/* sending props in form */}
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onTogggleItems={handleTogggleItem} onClearList={handleClearList} />
    <Stats items={items} />
  </div>

}




