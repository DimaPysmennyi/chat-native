export interface IFriendCardProps {
    image: string
    firstname: string
    lastname: string
    username: string
    buttonLabel?: string
}

export interface IFriendListProps {
    variant: "requests" | "recommendations" | "friends",
    array: IFriendCardProps[]
}

export interface IDeleteFriendModalProps{
    isVisible: boolean;
	onClose: () => void;
}