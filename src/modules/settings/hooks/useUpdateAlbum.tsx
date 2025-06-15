import { IUpdateAlbum } from "../types/settings.types";

export async function useUpdateAlbum(data: IUpdateAlbum) {
    try {
        const response = await fetch(
            `http://192.168.0.51:8000/api/albums/update/${data.id}`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            }
        );
        const result = await response.json();
        if (result.status == "error") {
            console.log(result.message);
            return {status: "error", message: result.message};
        }
        return {status: "success"};
    } catch (error) {
        console.error(error);
    }
}