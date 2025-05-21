import { createContext, useContext, useEffect, useState } from "react";
import { IPostContext, IPostContextProviderProps } from "./context.types";
import { useAllPosts } from "../hooks";
import { IPost } from "../types";

const initialValue: IPostContext = {
	allPosts: null,
	getPosts: () => {},
};

const postContext = createContext<IPostContext>(initialValue);
export function usePostContext() {
	return useContext(postContext);
}

export function PostContextProvider(props: IPostContextProviderProps) {
	const [allPosts, setAllPosts] = useState<IPost[] | null>(null);
	const [posts, setPosts] = useState<IPost[] | null>(null);

	async function getPosts() {
		try {
			const response = await fetch(
				"http://192.168.0.51:8000/api/posts/all"
			);
			const posts = await response.json();
			setPosts(posts.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		setAllPosts(posts);
	}, [posts]);

	useEffect(() => {
		getPosts();
	}, []);

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
