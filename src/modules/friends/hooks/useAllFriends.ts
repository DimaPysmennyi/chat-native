import { useEffect, useState } from "react";
import { IFriend } from "../types/friend.types";
import { Response } from "../../../shared/types";
import { IUser } from "../../auth/tools/context/context.types";
import { GET } from "../../../shared/tools/requests";

export function useAllFriends(id: number) {
	const [friends, setFriends] = useState<IUser[]>();
	const [error, setError] = useState<string>();
	useEffect(() => {
		async function getFriends() {
			try {
				const friends = await GET<IUser[]>({endpoint: `api/users/friends/${id}`})
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
