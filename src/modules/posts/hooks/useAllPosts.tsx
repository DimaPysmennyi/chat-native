import { useEffect, useState } from "react";
import { IPost } from "../types/";
import { GET } from "../../../shared/tools/requests";

export function useAllPosts(): {posts: IPost[]} {
	const [posts, setPosts] = useState<IPost[]>([]);
	useEffect(() => {
		async function getAllPosts() {
			try {
				const response = await GET<IPost[]>({
					endpoint: "api/posts/all"
				});

                // console.log(posts);
				if (response.status == "error"){
					console.log(response.message);
					return;
				}
				setPosts(response.data);
			} catch (error) {
				console.error(error);
			}
		}

		getAllPosts();
	}, []);
	return { posts: posts };
}
