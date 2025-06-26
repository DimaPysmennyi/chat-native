import { Response } from "../../../shared/types";
import { IChat } from "./chat.types";

interface NewMessagePayload {
	id: number;
	content: string;
	sentAt: Date;
	attachedImage: string | null;
	authorId: number;
	chatGroupId: number;
};

export interface Message {
    content: string;
    sentAt?: Date | string;
    attachedImage?: string | null;
    authorId: number;
    chatGroupId: number;
}

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
    message: Message
}

export interface IServerEvents {
	newMessage: (data: NewMessagePayload) => void;
	chatUpdate: (data: IChatUpdatePayload) => void;
}

export interface IClientEvents {
	joinChat: (data: IJoinChatPayload, callback: IJoinChatCallback) => void;
	leaveChat: (data: ILeaveChatPayload) => void;
	sendMessage: (data: SendMessagePayload) => void;
}
