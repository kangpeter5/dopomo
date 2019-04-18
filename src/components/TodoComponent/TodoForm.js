import React from 'react'

const TodoForm = props => {
    return (
        <form>
            <input
                name='todo'
                type='text'
                onChange={props.inputChangehandler}
                placeholder='Enter a Task'
            />
            <button 
                onClick={props.addTask}>Add a Task</button>
            <button>Remove Completed</button>
        </form>
    )
}

export default TodoForm