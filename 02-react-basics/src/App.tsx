import { useState } from "react";
import "./App.css";

function App() {
	// let counter = 0;  // stateless
	const [counter, setCounter] = useState(0);

	const handleBtnClick = () => {
		console.log("Stop it, that tickles!");

		console.log("Counter before increase:", counter);
		// increase counter
		setCounter(counter + 1);
		console.log("Counter after increase:", counter);  // still the same value since state updates are queued
	}

	console.log("App is rendering, counter is:", counter);

	return (
		<>
			<h1>02-react-basics</h1>

			<p>Counter: {counter}</p>

			<button onClick={handleBtnClick}>Click me!</button>
		</>
	);
}

export default App;
