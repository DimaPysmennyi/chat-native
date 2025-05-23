import { ReactNode } from "react"
import { IPost } from "../../../posts/types"

export interface IUser {
    id: number,
    email: string,
    username?: string,
    firstname?: string,
    lastname?: string,
    posts: IPost[],
    image?: string,
    birthdate?: string
}

export interface IAuthContext{
    user: IUser | null,
    resultMessage: string | null,
    login: (email: string, password: string) => void
    register: (username: string, email: string, password: string, code: string) => void
    isAuthenticated: () => boolean
    logout: () => void
}

export interface IAuthContextProviderProps{
    children?: ReactNode
}