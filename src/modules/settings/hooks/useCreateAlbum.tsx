import { useEffect } from "react";
import { POST } from "../../../shared/tools/requests";
import { useAuthContext } from "../../auth/tools/context";
import { InitialAlbumData } from "../types/modal.types";

export async function useCreateAlbum(data: InitialAlbumData) {
	const { user } = useAuthContext();
	try {
        console.log(12312321312);
		const result = await POST<string>({
			endpoint: `api/users/create-album`,
			body: { ...data, userId: user?.id },
		});

		if (result.status == "error") {
			console.log(result.message);
		}
	} catch (error) {
		console.error(error);
	}
}
