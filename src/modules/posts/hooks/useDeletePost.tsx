import { useEffect, useState } from "react";
import { Response } from "../../../shared/types";

export function useDeletePost(id: number){
    const [result, setResult] = useState<string>();
    useEffect(() => {
        async function deleteUser(){
            try {
                const response = await fetch(`http://192.168.0.51:8000/api/posts/delete/${id}`);
                const result: Response<string> = await response.json();
                console.log(result);
                setResult(result.status);
            } catch (error){
                const err = error instanceof Error ? error.message : undefined
                setResult(err);
            }
        }
        deleteUser();
    }, [id])

    return result;
}