import { IUser } from "../../auth/tools/context/context.types"

export interface IFriendCardProps {
    image?: string | undefined
    firstname?: string
    lastname?: string
    username?: string
    buttonLabel?: string,
    onFirstButtonPress?: () => void,
    onSecondButtonPress?: () => void,
}

export interface IFriendship{
    id: number,
    profile1Id: number,
    profile2Id: number,
    accepted: boolean,
    profile1: IUser,
    profile2: IUser
}

export interface IFriendListProps {
    variant: "requests" | "recommendations" | "friends",
    arrayUser?: IUser[] | undefined
    arrayFriends?: IFriendship[] | undefined
}

export interface IDeleteFriendModalProps{
    isVisible: boolean;
	onClose: () => void;
}