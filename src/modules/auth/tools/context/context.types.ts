import { ReactNode } from "react"
import { IPost } from "../../../posts/types"
import { IFriend } from "../../../friends/types/friend.types"
import { Album } from "../../../settings/ui/album-settings/album.settings.types"

export interface IUser {
    id: number,
    email: string,
    username?: string,
    firstname?: string,
    lastname?: string,
    posts: IPost[],
    friends: IUser[],
    albums: Album[]
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