import { useState } from "react";
import "./assets/scss/App.scss";
import Counter from "./components/Counter";

interface Post {
	id: number;
	title: string;
	likes: number;
}

function App() {
	// let counter = 0;  // stateless
	const [msg, setMsg] = useState("Hi mom!");
	const [posts, setPosts] = useState<Post[]>([
		{ id: 1, title: "React Rocks 🎸!", likes: 1337 },
		{ id: 2, title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ id: 3, title: "Got state? 🚓", likes: 3 },
	]);
	const [salary, setSalary] = useState(10);
	const [showSalary, setShowSalary] = useState(false);

	const handleChangeSalary = (amount: number) => {
		if (salary + amount < 5) {
			setSalary(5);
			return;
		}

		setSalary(salary + amount);
	}

	console.log("App is rendering...");

	return (
		<div className="container py-2">
			<h1>02-react-basics</h1>

			<h2>Counters</h2>

			<Counter />

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

			{showSalary && (
				<>
					<h2>Salary</h2>

					<p>Salary per hour: {salary} &euro;</p>

					{salary < 10 && (
						<div className="alert alert-warning">
							You might want to change job?
						</div>
					)}

					<div className="buttons">
						<div className="mb-1">
							<button
								className="btn btn-primary btn-lg"
								onClick={() => handleChangeSalary(1)}
							>
								Raise 1 &euro; 🤑
							</button>
							<button
								className="btn btn-warning btn-lg"
								disabled={salary === 5}
								onClick={() => handleChangeSalary(-1)}
							>
								Decrease 1 &euro; 😢
							</button>
						</div>

						<div className="mb-1">
							<button
								className="btn btn-primary btn-lg"
								onClick={() => handleChangeSalary(5)}
							>
								Raise 5 &euro; 🤑🤑🤑
							</button>
							<button
								className="btn btn-warning btn-lg"
								disabled={salary === 5}
								onClick={() => handleChangeSalary(-5)}
							>
								Decrease 5 &euro; 😢😢😢
							</button>
						</div>
					</div>
				</>
			)}

			<hr />

			<h2>Posts</h2>

			<ul>
				{posts.map(post =>
					<li key={post.id}>{post.title} ({post.likes} likes)</li>
				)}
			</ul>
		</div>
	);
}

export default App;
