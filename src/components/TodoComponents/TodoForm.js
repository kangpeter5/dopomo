import React, { useContext, useState } from 'react';
import Store from '../context'
import './TodoForm.scss'

export default function TodoForm() {
    const { dispatch } = useContext(Store)

    // Creating a local state to have currently writing
    // todo item that will be sent to the global store.
    const [ todo, setTodo ] = useState('')

    function handleTodoChange(e) {
        setTodo(e.target.value)
    }

    function handleTodoAdd() {
        dispatch({ type: 'ADD_TODO', payload: todo })
        setTodo('')
    }

    function handleSubmitForm(e){
        if(e.keyCode === 13 ) handleTodoAdd()
    }

    return (
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input 
                        type="text"
                        value={todo}
                        autoFocus={true}
                        placeholder="Enter new Todo"
                        onKeyUp={handleSubmitForm}
                        onChange={handleTodoChange}
                    />
                    <button className="btn--primary" onClick={handleTodoAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}