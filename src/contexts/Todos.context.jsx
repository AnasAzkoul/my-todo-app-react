import { createContext, useState } from "react";

export const todosContext = createContext({
	todos: [], 
	setTodos: () => null
})

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([]); 

	const value = {
		todos,
		setTodos, 
	}

	return (
		<todosContext.Provider value={value}>{children}</todosContext.Provider>
	)
}