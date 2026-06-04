import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onTogggleItems, onClearList }) {

    // sort
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


    return (
        <div className="list">

            <ul>
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


                {/* clearlist */}
                <button onClick={onClearList}>Clear List</button>
            </div>



        </div>
    );
}
