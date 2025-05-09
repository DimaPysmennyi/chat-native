import { ReactNode } from "react"

export interface IUser {
    username: string
    email: string
    password: string
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