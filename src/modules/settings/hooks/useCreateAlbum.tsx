import { POST } from "../../../shared/tools/requests";
import { InitialAlbumData } from "../types/modal.types";

export async function useCreateAlbum(data: InitialAlbumData) {
	const { name, topic, userId } = data;
	console.log(12312321312);
	try {
		const result = await POST<string>({
			endpoint: `api/users/create-album`,
			body: { name: name, topic: topic, userId: userId }
		});

		if (result.status == "error") {
			console.log(result.message);
		}
	} catch (error) {
		console.error(error);
	}
}
