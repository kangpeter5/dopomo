import React, { useContext, useReducer } from "react"

import Store from "./components/context"
import reducer from "./components/reducer"

import { usePersistedContext, usePersistedReducer } from "./components/usePersist"

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import Pomodoro from "./components/TimerComponents/Pomodoro"

export default function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state")

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  )

  return (
    // State.Provider passes the state and dispatcher to the dom
    <Store.Provider value={{ state, dispatch }}>
      <Pomodoro />
      <section className="todo-container">
        <TodoForm />
        <TodoList />
      </section>
    </Store.Provider>
  )
}