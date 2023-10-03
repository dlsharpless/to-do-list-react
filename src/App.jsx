import { useState } from "react"
import "./style.css"
import { NewToDoForm } from "./NewToDoForm"
import { ToDoList } from "./ToDoList"

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
            <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
        </>
    )
}
