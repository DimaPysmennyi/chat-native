import { useEffect, useState } from "react";
import { IPost } from "../types";
import { Response } from "../../../shared/types";
import { GET } from "../../../shared/tools/requests";

export function usePostsByUserId(id: number) {
	const [posts, setPosts] = useState<IPost[]>();
	useEffect(() => {
		async function getPosts() {
			try {
				const response = await GET<IPost[]>({
					endpoint: `api/posts/users/${id}`,
				});

				if (response.status == "error") {
					console.log(response.message);
					return;
				}
				setPosts(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getPosts();
	}, [id]);
	return posts;
}
