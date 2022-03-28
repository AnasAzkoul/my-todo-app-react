import React from "react";

import './Todo-item.styles.css'; 


const TodoItem = ({ todo, todos, setTodos }) => {
	const deleteHandler = () => {
		if (todos.length) { 
			return setTodos(todos.filter(el => el.id !== todo.id))
		}
	}

	const completeHandler = () => {
		setTodos(todos.map(item => 
		 item.id === todo.id ? {...todo, completed: !todo.completed} : item))
	}

	return (
		<div className="todo-item-container">
			<li
				onClick={completeHandler}
				className={`${todo.completed && 'completed'}`}>{todo.body}</li>
			<button
				type="click"
				onClick={deleteHandler}
			>Delete</button>
		</div>
	)
}

export default TodoItem; 