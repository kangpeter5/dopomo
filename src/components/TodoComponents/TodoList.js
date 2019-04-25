import React, { useContext } from 'react'
import Store from "../context"

export default function TodoList() {
  const { state, dispatch } = useContext(Store)

  const pluralize = count => (
    count > 1 ? `There are ${count} To-do's.` : `There is ${count} To-do.`
  )

  let TodoHeader = 
    state.todos.length === 0 ? (
      <h4>Ya done! Take a break!</h4>
    ) : (
      <div className="row">
        <div className="col">
          <h5>Todo List</h5>
        </div>
        <div className="col">
          <span className="indicator">{pluralize(state.todos.length)}</span>
        </div>
      </div>
    )

  return (
    <>
      <div className="row">
        <div className="col">
          {TodoHeader}
        </div>
      </div>
      <div className="row">
        <div className="col">
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
      </div>
    </>

  )
}