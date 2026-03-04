import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState(0);

	const handleBtnClick = () => {
		//console.log("Stop it, that tickles!");

		//console.log("Counter before increase:", counter);
		// increase counter
		setCounter(counter + 1);
		//console.log("Counter after increase:", counter);  // still the same value since state updates are queued
	}

	return (
		<>
			<p>Counter: {counter}</p>

			<button className="btn btn-primary" onClick={handleBtnClick}>Click me!</button>
		</>
	)
}

export default Counter;
