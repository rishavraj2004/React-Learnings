import { useState } from "react";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems(items => [...items, item])
    }
    function handleDelteItems(id) {
        setItems(items => items.filter(item => item.id !== id));
    }
    function handleToggleItems(id) {
        setItems(items => items.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
    }
    function handleClearList() {
        setItems([]);
    }


    return (
        <div className="App">
            <div className="container">

                <Logo />
                <Form onAddItems={handleAddItems} />
                <TaskList items={items} onDeleteItem={handleDelteItems} onToggleItems={handleToggleItems} onClearItems={handleClearList} />
                <Stats items={items} />
            </div>
        </div>

    )
}

function Logo() {
    return (
        <div className="logo">
            <h3>TO DO LIST </h3>

        </div>
    )
}

function Form({ onAddItems }) {

    const [description, setDescription] = useState("");



    function handleSubmit(e) {
        e.preventDefault();

        const newItem = { description, completed: false, id: Date.now() }

        if (!description) return;
        onAddItems(newItem)
        setDescription("")
    }
    return (
        <div className="form">
            <form className="add-form" onSubmit={handleSubmit}>
                {/* <h3>
                    Add and manage you task!😊
                </h3> */}
                <input className="input-task" type="text" placeholder="Add your task..." value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="input-button">Add</button>
            </form>

        </div>
    )
}





function Item({ item, onDeleteItem, onToggleItems }) {
    return (
        <li>
            <input type="checkbox" checked={item.completed} onChange={() => onToggleItems(item.id)} />
            <span style={item.completed ? { textDecoration: "line-through" } : {}}>
                {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>
                Delete
            </button>
        </li>
    )

}


function TaskList({ items, onDeleteItem, onToggleItems, onClearItems }) {
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItems={onToggleItems}
                    />
                ))}
            </ul>
            <button className="clear-btn" onClick={onClearItems}>
                Clear All
            </button>
        </div>
    )

}


function Stats({ items }) {
    if (!items.length) {
        return (
            <p className="stats">
                <em>Start adding your tasks 😊</em>
            </p>
        );
    }

    const numItems = items.length;

    // Count completed tasks
    const numCompleted = items.filter(
        (item) => item.completed
    ).length;

    const percentage = Math.round(
        (numCompleted / numItems) * 100
    );

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You completed all tasks! 🎉"
                    : `You have ${numItems} tasks, completed ${numCompleted} (${percentage}%).`}
            </em>
        </footer>
    );
}