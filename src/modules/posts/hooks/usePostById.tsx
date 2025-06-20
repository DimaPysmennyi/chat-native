import { useState, useEffect } from "react";
import { IPost } from "../types";
import { GET } from "../../../shared/tools/requests";

export function usePostById(id: number) {
	const [post, setPost] = useState<IPost>();
	useEffect(() => {
		async function getPost() {
			try {
				const response = await GET<IPost>({
					endpoint: `api/posts/${id}`,
				});
				// const post = await response.json();
				if (response.status == "error") {
					console.log(response.message);
					return;
				}
				setPost(response.data);
			} catch (error) {
				console.error(error);
			}
		}

		getPost();
	});
	return { post: post };
}
