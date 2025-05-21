import { useEffect, useState } from "react";
import { IPost } from "../types/";

export function useAllPosts(): {posts: IPost[]} {
	const [posts, setPosts] = useState<IPost[]>([]);
	useEffect(() => {
		async function getAllPosts() {
			try {
				const response = await fetch(
					"http://192.168.0.51:8000/api/posts/all"
				);
				const posts = await response.json();
                console.log(posts);
				setPosts(posts.data);
			} catch (error) {
				console.error(error);
			}
		}

		getAllPosts();
	}, []);
	return { posts: posts };
}
