import { ICreatePost } from "../types/";
import { POST } from "../../../shared/tools/requests";

export async function useCreatePost(data: ICreatePost) {
	const { title, topic, content, links, images, tags, userId } = data;
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
		const result = await POST<string>(
			{
				endpoint: "api/posts/create",
				body: {
					title: title,
					topic: topic,
					content: content,
					links: links,
					images: imageString,
					tags: tagString,
					userId: userId,
				}
			}
		);
		if (result.status == "error") {
			console.error("Result error:", result.message);
			return;
		}
		// console.log(result.data);
	} catch (error) {
		console.error("Caught error", error);
	}
}
