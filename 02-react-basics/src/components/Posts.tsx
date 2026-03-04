import { useState } from "react";

interface Post {
	id: number;
	title: string;
	likes: number;
}

function Posts() {
	const [idcounter, setIdCounter] = useState(3);

	const [posts, setPosts] = useState<Post[]>([
		{ id: 1, title: "React Rocks 🎸!", likes: 1337 },
		{ id: 2, title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ id: 3, title: "Got state? 🚓", likes: 3 },
	]);

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
	return (
		<>
			<h2>Posts</h2>

			{posts.length === 0 && <p>No posts available.</p>}
			{posts.length > 0 &&
				<>
					<ul>
						{posts.map(post =>
							<li key={post.id} className="mb-1">
								{post.title} ({post.likes} likes)
								<button className="btn btn-primary btn-sm m-1" onClick={() => handleLikePost(post.id)}>❤️ Like</button>
								<button className="btn btn-danger btn-sm m-1" onClick={() => handleDeletePost(post.id)}>🗑️ Delete</button>
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
		</>
	)

}

export default Posts;
