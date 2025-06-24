import { useEffect, useState } from "react";
import { GET } from "../../../shared/tools/requests";
import { IFriendship } from "../types/friend.types";

export function useRejectRequest(id: number) {
    const [request, setRequest] = useState<IFriendship>();
    const [error, setError] = useState<string>();
    useEffect(() => {
        async function rejectFriend() {
            try {
                const response = await GET<IFriendship>({
                    endpoint: `api/friends/reject-request/${id}`,
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
        rejectFriend();
    }, [id]);
    
    return {request, error}
}
