import { GET } from "../../../shared/tools/requests";

export async function useDeletePost(id: number) {
	try {
		const response = await GET<string>({
			endpoint: `/api/posts/delete/${id}`,
		});
		if (response.status == "error") {
			console.log(response.message);
			return;
		}
		// console.log(result);
	} catch (error) {
		const err = error instanceof Error ? error.message : undefined;
		console.log(err);
	}
}
