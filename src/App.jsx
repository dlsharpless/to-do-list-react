import { useState } from "react"
import "./style.css"
import { NewToDoForm } from "./NewToDoForm"

export default function App() {
    const [toDos, setToDos] = useState([])

    function addToDo(title) {
        setToDos(currentToDos => {
            return [
                ...currentToDos,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        })
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
            <NewToDoForm onSubmit={addToDo} />
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
