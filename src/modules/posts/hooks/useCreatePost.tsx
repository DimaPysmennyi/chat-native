import { Response } from "../../../shared/types";
import { ICreatePost } from "../types/";

export async function useCreatePost(data: ICreatePost) {
	const { title, topic, content, links, images, tags } = data;
	let imageString = "";
	if (images) {
		imageString = images.join(" ");
	}

	let tagString = "";
	if (tags) {
		tagString = tags.join(" ");
	}

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
					userId: 11,
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
