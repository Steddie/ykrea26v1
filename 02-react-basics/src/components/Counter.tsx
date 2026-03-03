import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handleBtnClick = () => {
		console.log("Counter before updates:", counter);  // 0

		setCounter( (prevValue) => prevValue + 1 );  // prevValue = 0, return 1

		console.log("Counter between updates:", counter);  // 0

		setCounter( (prevValue) => prevValue + 1 );  // prevValue = 1, return 2

		console.log("Counter after updates:", counter);  // 0
	}

	return (
		<div className="counter">
			<p>Counter: {counter}</p>

			<button className="btn btn-primary" onClick={handleBtnClick}>Click me!</button>
		</div>
	)
}

export default Counter;
