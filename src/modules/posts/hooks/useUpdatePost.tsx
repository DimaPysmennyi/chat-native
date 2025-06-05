import { useAuthContext } from "../../auth/tools/context";
import { IPost } from "../types";
import { Response } from "../../../shared/types";
import { useEffect } from "react";

export function useUpdatePost(data: IPost) {
	const { id, title, topic, content, links, images, tags } = data;
	const { user } = useAuthContext();

	useEffect(() => {
		async function updateUser() {
			try {
				const response = await fetch(
					`http://192.168.0.51:8000/api/posts/update/${id}`,
					{
						method: "POST",
						body: JSON.stringify({
							title: title,
							topic: topic,
							content: content,
							links: links,
							images: images,
							tags: tags,
							userId: user?.id,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				const result: Response<string> = await response.json();
				if (result.status == "error") {
					console.error("Result error:", result.message);
					return;
				}
				console.log(result.data);
			} catch (error) {
				console.error("Caught error", error);
			}
		}
        updateUser();
	}, [user]);
}
