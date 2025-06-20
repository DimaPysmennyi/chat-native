import { POST } from "../../../shared/tools/requests";
import { IUpdateUser } from "../types/settings.types";

export async function useUpdateUser(data: IUpdateUser) {
	try {
		const response = await POST<string>(
			{
				endpoint: `api/users/update/${data.id}`,
				body: data,
			}
		);
		if (response.status == "error") {
			console.log(response.message);
			return {status: "error", message: response.message};
		}
        console.log(123123123)
		return {status: "success"};
	} catch (error) {
		console.error(error);
	}
}
