import { useState, useRef } from "react";

interface Post {
	id: number;
	title: string;
	likes: number;
}

function Posts() {
	const inputPostTitleRef = useRef<HTMLInputElement>(null);

	const [posts, setPosts] = useState<Post[]>([
		{ id: 1, title: "React Rocks 🎸!", likes: 1337 },
		{ id: 2, title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ id: 3, title: "Got state? 🚓", likes: 3 },
	]);

	const handleLikePost = (post: Post) => {
		post.likes++;
		setPosts([...posts]);
	}

	const handleDeletePost = (postToDelete: Post) => {
		// create a new array of posts without the deleted post
		const postsToKeep = posts.filter(post => post.id !== postToDelete.id);

		// update the state with the new array of posts
		setPosts(postsToKeep);
	}

	const handleAddPost = (title: string) => {

		// create a new post object
		const newPost: Post = {
			id: Math.max(0, ...(posts.map(post => post.id))) + 1,
			title,
			likes: 0,
		};
		// update the state with the new array of posts
		setPosts([...posts, newPost]);
	}

	const handleFormSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!inputPostTitleRef.current) {
			return;
		}

		const input = inputPostTitleRef.current;
		const title = input.value.trim();
		if(title) {
			handleAddPost(title);
			input.value = "";
		}
	}

	return (
		<>
			<h2>Posts</h2>

			{posts.length === 0 && <p>No posts available.</p>}
			{posts.length > 0 &&
				<ul>
					{posts.map(post =>
						<li key={post.id} className="mb-1">
							{post.title} ({post.likes} likes)
							<button
								className="btn btn-success btn-sm ms-1"
								onClick={() => handleLikePost(post)}
								>❤️</button>
							<button
								className="btn btn-danger btn-sm ms-1"
								onClick={() => handleDeletePost(post)}
								>🗑️</button>
						</li>
					)}
				</ul>
			}
			<form onSubmit={handleFormSubmit}>
				<div className="add-post input-group mb-3">
					<input
						aria-label="Post title"
						placeholder="Post title"
						type="text"
						ref={inputPostTitleRef}
						className="form-control"
						required
					/>
					<button className="btn btn-success" type="submit">Add Post</button>

				</div>
			</form>
		</>
	)

}

export default Posts;
