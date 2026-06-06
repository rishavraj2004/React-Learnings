export default function App() {
    return (
        <div className="App">
            <div className="container">

                <Logo />
                <Form />
                <Item />
                <Stats />
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

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="form">
            <form className="add-form" onSubmit={{ handleSubmit }}>
                {/* <h3>
                    Add and manage you task!😊
                </h3> */}
                <input className="input-task" type="text" placeholder="Add your task..." />
                <button className="input-button">Add</button>
            </form>

        </div>
    )
}

function Item() {
    return (
        <li>
            <input type="checkbox" />
            <span>item</span>
            <button>Delete</button>
        </li>
    )

}

function Stats() {
    return <footer className="stats">
        <em>
            You have not finished yet
        </em>
    </footer>
}