import { ReactNode } from "react"
import { IPost } from "../../../posts/types"
import { IAlbum } from "../../../settings/types/settings.types"

export interface IUser {
    name: ReactNode
    id: number,
    email: string,
    username?: string,
    firstname?: string,
    lastname?: string,
    posts: IPost[],
    albums: IAlbum[]
    image?: string,
    birthdate?: string
}

export interface IAuthContext{
    user: IUser | null,
    resultMessage: string | null,
    login: (email: string, password: string) => void
    register: (email: string, password: string, code: string) => void
    isAuthenticated: () => boolean
    logout: () => void,
    getToken: () => void
}

export interface IAuthContextProviderProps{
    children?: ReactNode
}