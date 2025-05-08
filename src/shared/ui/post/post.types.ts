import { AvatarName } from "../../../../assets/avatars/avatars";

export interface IPostProps {
    avatar: AvatarName;
    username: string;
    headerImage?: string;
    text: string;
    hashtags?: string;
    images?: boolean;
    likes: number;
    views: number;
}