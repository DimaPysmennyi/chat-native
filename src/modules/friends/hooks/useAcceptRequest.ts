import { useEffect, useState } from "react";
import { useAuthContext } from "../../auth/tools/context";
import { GET, POST } from "../../../shared/tools/requests";
import { IFriendship } from "../types/friend.types";

export function useAcceptRequest(id: number) {
	const [request, setRequest] = useState<IFriendship>();
	const [error, setError] = useState<string>();
	useEffect(() => {
		async function acceptFriend() {
			try {
				const response = await GET<IFriendship>({
					endpoint: `api/friends/accept-request/${id}`,
				});
				if (response.status == "error") {
					console.log(response.message);
					return;
				}
				setRequest(response.data);
			} catch (error) {
				const err = error instanceof Error ? error.message : undefined;
				setError(err);
			}
		}
		acceptFriend();
	}, [id]);
	
	return {request, error}
}
