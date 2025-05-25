import { IUpdateUser } from "../types/settings.types";

export async function useUpdateUser(data: IUpdateUser) {
	try {
		const response = await fetch(
			`http://192.168.0.51:8000/api/users/update/${data.id}`,
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			}
		);
		const user = await response.json();
		if (user.status == "error") {
			console.log(user.message);
			return {status: "error", message: user.message};
		}
        console.log(123123123)
		return {status: "success"};
	} catch (error) {
		console.error(error);
	}
}
