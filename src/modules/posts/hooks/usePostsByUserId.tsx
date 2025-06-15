import { useEffect, useState } from "react";
import { IPost } from "../types";
import { Response } from "../../../shared/types";

export function usePostsByUserId(id: number){
    const [posts, setPosts] = useState<IPost[]>();
    useEffect(() => {
        async function getPosts(){
            try{ 
                const response = await fetch(`http://192.168.0.51/api/posts/users/${id}`);
                const posts: Response<IPost[]> = await response.json()
                if (posts.status == "error"){
                    console.log(posts.message);
                    return;
                }
                setPosts(posts.data);
            } catch(error){
                console.error(error);
            }
        }
        getPosts();
    }, [id])
    return posts;
}