import { useState } from "react";
import "./assets/scss/App.scss";

function App() {
	// let counter = 0;  // stateless
	const [counter, setCounter] = useState(0);
	const [msg, setMsg] = useState("Hi mom!");

	const handleBtnClick = () => {
		console.log("Stop it, that tickles!");

		console.log("Counter before increase:", counter);
		// increase counter
		setCounter(counter + 1);
		console.log("Counter after increase:", counter);  // still the same value since state updates are queued
	}

	console.log("App is rendering, counter is:", counter);

	return (
		<div className="container py-2">
			<h1>02-react-basics</h1>

			<p>Counter: {counter}</p>

			<button className="btn btn-primary" onClick={handleBtnClick}>Click me!</button>

			<hr />

			<p>{msg}</p>

			<button className="btn btn-warning" onClick={ () => setMsg("Hi dad!") }>Hi dad?</button>
		</div>
	);
}

export default App;
