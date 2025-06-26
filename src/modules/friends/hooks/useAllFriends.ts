import { useEffect, useState } from "react";
import { IUser } from "../../auth/tools/context/context.types";
import { GET } from "../../../shared/tools/requests";
import { useAuthContext } from "../../auth/tools/context";

export function useAllFriends() {
	const [friends, setFriends] = useState<IUser[]>();
	const [error, setError] = useState<string>();
	const {user} = useAuthContext();
	useEffect(() => {
		async function getFriends() {
			try {
				const friends = await GET<IUser[]>({endpoint: `api/friends/all/${user?.id}`})
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
	}, [user]);
	return { friends: friends, error: error };
}
