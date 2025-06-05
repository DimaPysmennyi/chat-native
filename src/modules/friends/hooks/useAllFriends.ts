import { useEffect, useState } from "react";
import { IFriend } from "../types/friend.types";
import { Response } from "../../../shared/types";

export function useAllFriends(id: number) {
	const [friends, setFriends] = useState<IFriend[]>();
	const [error, setError] = useState<string>();
	useEffect(() => {
		async function getFriends() {
			try {
				const response = await fetch(
					`http://192.168.0.51:8000/api/users/friends/${id}`
				);
				const friends: Response<IFriend[]> = await response.json();
				if (friends.status == "error") {
					setError(friends.message);
					return;
				}
				setFriends(friends.data);
			} catch (error) {
				const err = error instanceof Error ? error.message : undefined;
				setError(err);
			}
		}
		getFriends();
	}, [id]);
	return { friends: friends, error: error };
}
