import { useEffect } from "react";
import { useAuthContext } from "../../auth/tools/context";
import { POST } from "../../../shared/tools/requests";

export function useDeleteFriend(id: number) {
    const { user } = useAuthContext();
    useEffect(() => {
        async function deleteFriend() {
            try {
                const response = await POST({
                    endpoint: `api/friends/delete-friend/${user?.id}`,
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
        deleteFriend();
    }, [id]);
}
