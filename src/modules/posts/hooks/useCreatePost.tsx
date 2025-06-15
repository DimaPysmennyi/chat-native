import { useEffect } from "react";
import { Response } from "../../../shared/types";
import { useAuthContext } from "../../auth/tools/context";
import { ICreatePost } from "../types/";

export async function useCreatePost(data: ICreatePost) {
	// console.log(data);
	const { title, topic, content, links, images, tags, userId } = data;
	// console.log(user.id);
	let imageString = "";
	if (images) {
		imageString = images.join(" ");
	}

	let tagString = "";
	if (tags) {
		tagString = tags.join(" ");
	}

	// console.log(user?.id)

	try {
		const response = await fetch(
			"http://192.168.0.51:8000/api/posts/create",
			{
				method: "POST",
				body: JSON.stringify({
					title: title,
					topic: topic,
					content: content,
					links: links,
					images: imageString,
					tags: tagString,
					userId: userId,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const result: Response<string> = await response.json();
		console.log(result);
		if (result.status == "error") {
			console.error("Result error:", result.message);
			return;
		}
		// console.log(result.data);
	} catch (error) {
		console.error("Caught error", error);
	}
}
