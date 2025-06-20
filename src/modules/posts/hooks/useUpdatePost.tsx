import { useAuthContext } from "../../auth/tools/context";
import { IPost } from "../types";
import { Response } from "../../../shared/types";
import { useEffect } from "react";
import { POST } from "../../../shared/tools/requests";

export function useUpdatePost(data: IPost) {
	const { id, title, topic, content, links, images, tags } = data;
	const { user } = useAuthContext();

	useEffect(() => {
		async function updateUser() {
			try {
				const result = await POST<string>(
					{
						endpoint: `api/posts/update/${id}`,
						body: {
							title: title,
							topic: topic,
							content: content,
							links: links,
							images: images,
							tags: tags,
							userId: user?.id,
						},
					}
				);

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
