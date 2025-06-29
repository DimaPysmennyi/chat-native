import { Response } from "../../../shared/types";
import { IChat } from "./chat.types";
import { IMessage } from "./message.types";

export interface IChatUpdatePayload {
    chatId: number
}

export interface IJoinChatPayload {
	chatId: number;
}

export interface ILeaveChatPayload {
	chatId: number;
}
export type IJoinChatCallback = (response: Response<IChat>) => void;

export type SendMessagePayload = {
    message: IMessage
}

export interface IServerEvents {
	newMessage: (data: IMessage) => void;
	chatUpdate: (data: IChatUpdatePayload) => void;
}

export interface IClientEvents {
	joinChat: (data: IJoinChatPayload, callback: IJoinChatCallback) => void;
	leaveChat: (data: ILeaveChatPayload) => void;
	sendMessage: (data: SendMessagePayload) => void;
}
