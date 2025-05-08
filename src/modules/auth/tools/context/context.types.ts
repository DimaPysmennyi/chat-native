import { ReactNode } from "react"

export interface IUser {
    username: string
    email:string
    password: string
    firstname: string
    lastname: string
}

export interface IAuthContext{
    user: IUser | null,
    resultMessage: string | null,
    login: (email: string, password: string) => void
    register: (firstname: string, lastname: string, username: string, email: string, password: string) => void
    isAuthenticated: () => boolean
    logout: () => void
}

export interface IAuthContextProviderProps{
    children?: ReactNode
}