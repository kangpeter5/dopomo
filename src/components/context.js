import React from 'react'

const Store = React.createContext({
    todos: [
        //initial date
        "buy stuff",
        "cook stuff",
        "eat stuff",
    ]
})

export default Store