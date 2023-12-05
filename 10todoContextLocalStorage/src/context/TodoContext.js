import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
    return useContext(TodoContext);
}

