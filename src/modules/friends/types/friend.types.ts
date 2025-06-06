import { IUser } from "../../auth/tools/context/context.types"

export interface IFriendCardProps {
    image?: string
    firstname?: string
    lastname?: string
    username?: string
    buttonLabel?: string
}

export interface IFriend{
    id: number,
    friendUserId: number,
    friendOfId: number
}

export interface IFriendListProps {
    variant: "requests" | "recommendations" | "friends",
    array: IUser[] | undefined
}

export interface IDeleteFriendModalProps{
    isVisible: boolean;
	onClose: () => void;
}