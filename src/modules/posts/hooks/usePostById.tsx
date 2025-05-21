import { useState, useEffect } from "react";
import { IPost } from "../types";

export function usePostById(id: number) {
	const [post, setPost] = useState<IPost>();
	useEffect(() => {
		async function getPost() {
			try {
				const response = await fetch(
					`http://192.168.0.51:8000/api/posts/${id}`
				);
				const post = await response.json();
				setPost(post);
			} catch (error) {
				console.error(error);
			}
		}

		getPost();
	});
	return { post: post };
}
