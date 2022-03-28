import React from 'react'

import './Form.styles.css'; 


const Form = ({ input, setInput, setTodos, todos }) => {

	const onSubmitHandler = (e) => {
		e.preventDefault(); 

		setTodos([
			...todos, {id: Math.random() * 100, body: input, completed: false}
		])

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