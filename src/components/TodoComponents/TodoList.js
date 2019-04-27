import React, { useContext } from 'react'
import Store from "../context"
import './TodoList.scss'

export default function TodoList() {
  const { state, dispatch } = useContext(Store)

  const pluralize = count => (
    count > 1 ? `There are ${count} To-do's.` : `There is ${count} To-do.`
  )

  let TodoHeader = 
    state.todos.length === 0 ? (
      <h4>Ya done! Take a break!</h4>
    ) : (
      <>
        <div className="col">
          <h2>Todo List</h2>
        </div>
        <div className="col">
          <span className="indicator">{pluralize(state.todos.length)}</span>
        </div>
      </>
    )

  return (
    <>
      <div className="row">
        {TodoHeader}
      </div>
      <div className="row">
        <ul className="list-group">
          {state.todos.map(t => (
            <li key={t} className="list-group-item">
              {t}
              <button 
                className="btn-done" 
                style={{ marginLeft: 10 }} 
                onClick={() => dispatch({ type: "COMPLETE", payload: t })} 
              >
                COMPLETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}