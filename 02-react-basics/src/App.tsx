import { useState } from "react";
import Counter from "./Counter.tsx";
import "./assets/scss/App.scss";
import Counter from "./components/Counter";

interface Post {
	id: number;
	title: string;
	likes: number;
}

function App() {
<<<<<<< Updated upstream
	// let counter = 0;  // stateless
=======
	const [idcounter, setIdCounter] = useState(3);

>>>>>>> Stashed changes
	const [msg, setMsg] = useState("Hi mom!");
	const [posts, setPosts] = useState<Post[]>([
		{ id: 1, title: "React Rocks 🎸!", likes: 1337 },
		{ id: 2, title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ id: 3, title: "Got state? 🚓", likes: 3 },
	]);
	const [salary, setSalary] = useState(10);
	const [showSalary, setShowSalary] = useState(false);

<<<<<<< Updated upstream
	const handleChangeSalary = (amount: number) => {
		if (salary + amount < 5) {
			setSalary(5);
			return;
		}

		setSalary(salary + amount);
	}

	console.log("App is rendering...");
=======
	const handleLikePost = (postId: number) => {
		// create a new array of posts with the updated likes for the liked post
		const updatedPosts = posts.map(post =>
			post.id === postId ? { ...post, likes: post.likes + 1 } : post
		);

		// update the state with the new array of posts
		setPosts(updatedPosts);
	}

	const handleDeletePost = (postId: number) => {
		// create a new array of posts without the deleted post
		const updatedPosts = posts.filter(post => post.id !== postId);

		// update the state with the new array of posts
		setPosts(updatedPosts);
	}

	const handleAddPost = (title: string) => {
		// create a new post object
		const newPost: Post = {
			id: idcounter + 1,
			title,
			likes: 0,
		};
		setIdCounter(idcounter + 1);

		// create a new array of posts with the new post added
		const updatedPosts = [...posts, newPost];

		// update the state with the new array of posts
		setPosts(updatedPosts);
	}

	const [salary, setSalary] = useState(10);

	const handleSalaryChange = (amount: number) => {
		if(salary + amount < 5) {
			setSalary(5);
			return;
		}

		setSalary(salary + amount);
	}

	//console.log("App is rendering, counter is:", counter);
>>>>>>> Stashed changes

	return (
		<div className="container py-2">
			<h1>02-react-basics</h1>
<<<<<<< Updated upstream

			<h2>Counters</h2>

			<Counter />

			<Counter />

=======
			<Counter />
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

			<hr />

			<h2>Posts</h2>

			{posts.length === 0 && <p>No posts available.</p>}
			{posts.length > 0 &&
				<>
					<ul>
						{posts.map(post =>
							<li key={post.id}>
								{post.title} ({post.likes} likes)
								<button className="btn btn-primary btn-sm" onClick={() => handleLikePost(post.id)}>❤️ Like</button>
								<button className="btn btn-danger btn-sm" onClick={() => handleDeletePost(post.id)}>🗑️ Delete</button>
							</li>
						)}
					</ul>
				</>
			}
			<div className="add-post">
				<input type="text" placeholder="Post title" id="new-post-title" className="form-control" />
				<button className="btn btn-success mt-2" onClick={() => {
					const input = document.getElementById("new-post-title") as HTMLInputElement;
					const title = input.value.trim();
					if(title) {
						handleAddPost(title);
						input.value = "";
					}
				}}>Add Post</button>
			</div>
		</div>
	);
}

export default App;
