import { IUser } from "../../auth/tools/context/context.types";
import { IMessage } from "./message.types";

export interface IChat{
    id: number,
    name?: string,
    isPersonalChat: boolean,
    avatar?: string,
    adminId?: number,
    members: {user: IUser}[],
    messages: IMessage[]
}