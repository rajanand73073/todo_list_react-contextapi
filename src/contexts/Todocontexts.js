import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        //yha pe sirf hum modeling kr rhe hai ki kaise kaam hoga
        {
            id: 1,
            todoTitle: "todo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todoTitle) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

})

export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider
