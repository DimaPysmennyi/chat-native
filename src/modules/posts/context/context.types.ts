import { ReactNode } from "react";
import { IPost } from "../types"

export interface IPostContext{
    allPosts: IPost[] | null;
    getPosts: () => void;
}

export interface IPostContextProviderProps{
    children?: ReactNode;
}