import { useState } from "react";

export default
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