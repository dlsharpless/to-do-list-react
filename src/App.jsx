import { useState } from "react"
import "./style.css"

export default function App() {
    const [newItem, setNewItem] = useState("")
    const [toDos, setToDos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setToDos(currentToDos => {
            return [
                ...currentToDos,
                { id: crypto.randomUUID(), title: newItem, completed: false },
            ]
        })

        setNewItem("")
    }

    function toggleToDo(id, completed) {
        setToDos(currentToDos => {
            return currentToDos.map(toDo => {
                if (toDo.id === id) {
                    return { ...toDo, completed }
                }

            return toDo
            })
        })
    }

    function deleteToDo(id) {
        setToDos(currentToDos => {
            return currentToDos.filter(toDo => toDo.id !== id)
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text"
                        id="item"
                    />
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className="header">To Do List</h1>
            <ul className="list">
                {toDos.length === 0 && "No To Do's"}
                {toDos.map(toDo => {
                    return (
                        <li key={toDo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    check={toDo.completed}
                                    onChange={e => toggleToDo(toDo.id, e.target.checked)}
                                />
                                {toDo.title}
                            </label>
                            <button
                                onClick={() => deleteToDo(toDo.id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
