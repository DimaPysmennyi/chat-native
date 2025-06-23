import { useEffect } from "react";
import { useAuthContext } from "../../auth/tools/context";
import { POST } from "../../../shared/tools/requests";

export function useAddFriend(id: number){
    const {user} = useAuthContext();
    useEffect(() => {
        async function addFriend(){
            try{
                const response = await POST({endpoint: `api/users/add-friend/${user?.id}`, body: {id: id}});
                if (response.status == "error"){
                    console.log(response.message);
                    return
                }
                console.log(response.data);
            } catch(error){
                console.log(error);
            }
        }
        addFriend();
    }, [id])
}