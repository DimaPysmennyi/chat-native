import { useEffect, useState } from "react";
import { Response } from "../types";
import { IUser } from "../../modules/auth/tools/context/context.types";
import { GET } from "../tools/requests";

export function useUserById(id: number){
    const [user, setUser] = useState<IUser>();
    const [error, setError] = useState<string>();
    useEffect(() => {
        async function getUser(){
            try { 
                const response = await GET<IUser>({endpoint: `api/users/unique/${id}`});
                if (response.status == "success"){
                    setUser(response.data);
                    return
                }
                setError(response.message);
            } catch(error){
                console.error(error);
                const err = error instanceof Error ? error.message : undefined
                setError(err)
            }
        }
        
        getUser()
    },[id])
    return {user, error};
}