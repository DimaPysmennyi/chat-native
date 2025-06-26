import { useEffect, useState } from "react";
import { GET } from "../../../shared/tools/requests";
import { IFriendship } from "../types/friend.types";
import { useAuthContext } from "../../auth/tools/context";

export function useAllRequests(){
    const [requests, setRequests] = useState<IFriendship[]>();
    const [error, setError] = useState<string>();
    const {user} = useAuthContext()
    useEffect(() => {
        async function getRequests(){
            try{
                const response = await GET<IFriendship[]>({endpoint: `api/friends/get-all-requests/${user?.id}`});
                if (response.status == "error"){
                    setError(response.message);
                    return;
                }
                setRequests(response.data);
            } catch(error){
                const err = error instanceof Error ? error.message : undefined;
				setError(err);
            }
        }
        getRequests();
    }, [user])
    return {requests, error}
}