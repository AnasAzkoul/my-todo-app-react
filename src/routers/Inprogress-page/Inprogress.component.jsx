import React from "react";

// components
import List from "../../components/Todo-List/List.component";
// styles
import './inProgress.styles.css'


const InProgress = () => {

	return (
		<div className="todo-app-contianer">
			<List />
		</div>
	)
}

export default InProgress; 