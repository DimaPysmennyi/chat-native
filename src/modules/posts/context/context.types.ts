import { ReactNode } from "react";
import { IPost } from "../types"

export interface IPostContext{
    allPosts: IPost[] | null;
    getPosts: () => IPost[] | null;
}

export interface IPostContextProviderProps{
    children?: ReactNode;
}