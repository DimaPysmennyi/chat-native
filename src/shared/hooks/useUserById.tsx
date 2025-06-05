import { useEffect, useState } from "react";
import { Response } from "../types";
import { IUser } from "../../modules/auth/tools/context/context.types";

export function useUserById(id: number){
    const [user, setUser] = useState<IUser>();
    const [error, setError] = useState<string>();
    useEffect(() => {
        async function getUser(){
            try { 
                const response = await fetch(`http://192.168.0.51:8000/api/users/unique/${id}`);
                const user: Response<IUser> = await response.json();
                if (user.status == "success"){
                    setUser(user.data);
                    return
                }
                setError(user.message);
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