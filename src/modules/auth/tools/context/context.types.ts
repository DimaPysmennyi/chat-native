import { ReactNode } from "react"
import { IPost } from "../../../posts/types"
import { IFriend } from "../../../friends/types/friend.types"
import { IAlbum } from "../../../settings/types/settings.types"

export interface IUser {
    id: number,
    email: string,
    username?: string,
    firstname?: string,
    lastname?: string,
    posts: IPost[],
    friends: IUser[],
    albums: IAlbum[]
    image?: string,
    birthdate?: string
}

export interface IAuthContext{
    user: IUser | null,
    resultMessage: string | null,
    login: (email: string, password: string) => void
    register: (username: string, email: string, password: string, code: string) => void
    isAuthenticated: () => boolean
    logout: () => void,
    getToken: () => void
}

export interface IAuthContextProviderProps{
    children?: ReactNode
}