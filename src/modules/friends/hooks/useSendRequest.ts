import { useEffect } from "react";
import { useAuthContext } from "../../auth/tools/context";
import { POST } from "../../../shared/tools/requests";

export function useSendRequest(id: number) {
	const { user } = useAuthContext();
	useEffect(() => {
		async function addFriend() {
			try {
				const response = await POST({
					endpoint: `api/friends/send-request/${user?.id}`,
					body: { toId: id },
				});
				if (response.status == "error") {
					console.log(response.message);
					return;
				}
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		addFriend();
	}, [id]);
}
