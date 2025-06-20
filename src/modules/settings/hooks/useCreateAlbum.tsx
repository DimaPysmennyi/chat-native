import { POST } from "../../../shared/tools/requests";
import { InitialAlbumData } from "../types/modal.types";

export async function useCreateAlbum(data: InitialAlbumData) {
    try {
        const result = await POST<string>(
            {
                endpoint: `/api/users/create-album`,
                body: data,
            }
        );
        if (result.status == "error") {
            console.log(result.message);
            return {status: "error", message: result.message};
        }
        return {status: "success"};
    } catch (error) {
        console.error(error);
    }
}