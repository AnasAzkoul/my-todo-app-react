import React from 'react'
import { useContext } from 'react';
import { todosContext } from '../../contexts/Todos.context';

import './Form.styles.css'; 


const Form = ({ input, setInput }) => {

	const { setTodos, todos } = useContext(todosContext); 

	console.log(todos);

	const onSubmitHandler = (e) => {
		e.preventDefault(); 

		setTodos([
			...todos, {id: Math.random() * 100, body: input, completed: false}
		])

		console.log(todos); 

		setInput('')
	}

	const onChangeHandler = (e) => {
		const text = e.target.value; 
		setInput(text); 
	}
	
	return (
		<div >
			<h1>todos</h1>
			<form onSubmit={onSubmitHandler}>
				<input
					onChange={onChangeHandler}
					value={input}
					type='text'
					className='input'
					placeholder='enter your todo'
					autoComplete='off'
				/>
			</form>
		</div>
	)
}

export default Form; 