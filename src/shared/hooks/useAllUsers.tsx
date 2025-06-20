import { useEffect, useState } from "react";
import { Response } from "../types";
import { IUser } from "../../modules/auth/tools/context/context.types";
import { GET } from "../tools/requests";

export function useAllUsers(){
    const [users, setUser] = useState<IUser[]>();
    const [error, setError] = useState<string>();
    useEffect(() => {
        async function getUsers(){
            try { 
                const users = await GET<IUser[]>({endpoint: 'api/users/all'})
                if (users.status == "success"){
                    setUser(users.data);
                    return
                }
                setError(users.message);
            } catch(error){
                console.error(error);
                const err = error instanceof Error ? error.message : undefined
                setError(err)
            }
        }
        
        getUsers()
    }, [])
    return {users, error};
}