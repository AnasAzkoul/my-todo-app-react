import React, { Fragment } from "react";
import { useState } from "react";
// components
import Form from "../../components/Todo-Form/Form.component";


const Home = () => {
	const [input, setInput] = useState(''); 
	return (
		<Fragment>
			<Form input={input} setInput={setInput}/>
		</Fragment>
	)
}

export default Home; 