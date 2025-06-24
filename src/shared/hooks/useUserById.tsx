import { useEffect, useState } from "react";
import { Response } from "../types";
import { IUser } from "../../modules/auth/tools/context/context.types";
import { GET } from "../tools/requests";

export function useUserById(id: number){
    const [user, setUser] = useState<IUser>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    useEffect(() => {
        async function getUser(){
            try { 
                setIsLoading(true);
                const response = await GET<IUser>({endpoint: `api/users/unique/${id}`});
                if (response.status == "success"){
                    setUser(response.data);
                    setIsLoading(false);
                    return
                }
                setError(response.message);
                setIsLoading(false);
            } catch(error){
                console.error(error);
                const err = error instanceof Error ? error.message : undefined
                setError(err)
                setIsLoading(false);
            }
        }
        
        getUser()
    },[id])
    return {user, isLoading, error};
}