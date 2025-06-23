import { POST } from "../../../shared/tools/requests";
import { IUpdateAlbum } from "../types/settings.types";

export async function useUpdateAlbum(data: IUpdateAlbum) {
    try {
        const result = await POST<string>(
            {
                endpoint: `api/users/albums/update/${data.id}`,
                body: data,
            }
        );
        // const result = await response.json();
        if (result.status == "error") {
            console.log(result.message);
            return {status: "error", message: result.message};
        }
        return {status: "success"};
    } catch (error) {
        console.error(error);
    }
}