import React from "react";

// import components
import TodoItem from "../Todo-item/Todo-item.component ";

import './List.styles.css'; 


const List = ({ todos, setTodos }) => {
	return (
		<ul className="todos">
			{todos.map(todo => (
					<TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
				))
			}
		</ul>
	)
}

export default List; 