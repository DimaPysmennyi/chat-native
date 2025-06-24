import { createContext, useContext, useEffect, useState } from "react";
import { IPostContext, IPostContextProviderProps } from "./context.types";
import { useAllPosts } from "../hooks";
import { IPost } from "../types";
import { GET } from "../../../shared/tools/requests";

const initialValue: IPostContext = {
	allPosts: null,
	getPosts: () => {return null},
};

const postContext = createContext<IPostContext>(initialValue);
export function usePostContext() {
	return useContext(postContext);
}

export function PostContextProvider(props: IPostContextProviderProps) {
	const [allPosts, setAllPosts] = useState<IPost[] | null>(null);
	
	function getPosts() {
		const [posts, setPosts] = useState<IPost[] | null>(null);
		useEffect(() => {
			async function posts(){
				try {
					const response = await GET<IPost[]>({
						endpoint: "api/posts/all"
					});
					// const posts = await response.json();
					if (response.status == "error"){
						console.log(response.message);
						return; 
					}
					setPosts(response.data);
					// setPosts(response.data);
				} catch (error) {
					console.error(error);
				}
			}
			posts();
		}, [])
		return posts
	}	

	return (
		<postContext.Provider
			value={{
				allPosts: allPosts,
				getPosts: getPosts,
			}}
		>
			{props.children}
		</postContext.Provider>
	);
}
