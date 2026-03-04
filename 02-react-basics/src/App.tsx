import { useState } from "react";
import Counter from "./components/Counter.tsx";
import Posts from "./components/Posts.tsx";
import "./assets/scss/App.scss";


function App() {

	const [msg, setMsg] = useState("Hi mom!");

	const [salary, setSalary] = useState(10);
	const [showSalary, setShowSalary] = useState(false);



	const handleSalaryChange = (amount: number) => {
		if(salary + amount < 5) {
			setSalary(5);
			return;
		}

		setSalary(salary + amount);
	}

	//console.log("App is rendering, counter is:", counter);

	return (
		<div className="container py-2">
			<h1>02-react-basics</h1>
			<Counter />
			<hr />

			<p>{msg}</p>

			<button className="btn btn-warning" onClick={ () => setMsg("Hi dad!") }>Hi dad?</button>

			<hr />

			<button
				className={showSalary
					? "btn btn-success mb-4"
					: "btn btn-danger mb-4"
				}
				onClick={() => setShowSalary(!showSalary)}
			>
				{showSalary ? "Hide" : "Show"} salary
			</button>

			<p>Salary per hour: {salary} &euro;</p>

			{salary < 10 && (
				<p className="alert alert-warning">Salary is under 10€!</p>)
			}

			<div className="buttons">
				<div className="mb-1">
					<button
						className="btn btn-primary btn-lg"
						onClick={() => handleSalaryChange(1)}
					>
						Raise 1 &euro; 🤑
					</button>
					<button
						className="btn btn-warning btn-lg"
						onClick={() => handleSalaryChange(-1)}
						disabled={salary === 5}
					>
						Decrease 1 &euro; 😢
					</button>
				</div>

				<div className="mb-1">
					<button
						className="btn btn-primary btn-lg"
						onClick={ () => handleSalaryChange(5) }
					>
						Raise 5 &euro; 🤑🤑🤑
					</button>
					<button
						className="btn btn-warning btn-lg"
						onClick={ () => handleSalaryChange(-5) }
						disabled={salary < 10}
					>
						Decrease 5 &euro; 😢😢😢
					</button>
				</div>
			</div>

			<hr />

			<Posts />
		</div>
	);
}

export default App;
