import React from "react";

// import components
import TodoItem from "../Todo-item/Todo-item.component ";
// import context 
import { useContext } from 'react';
import { todosContext } from '../../contexts/Todos.context';

import './List.styles.css'; 


const List = () => {
	const { todos } = useContext(todosContext); 
	return (
		<ul className="todos">
			{todos.map(todo => (
					<TodoItem todo={todo} key={todo.id}/>
				))
			}
		</ul>
	)
}

export default List; 