export interface IMessage{
    id: number,
    content: string,
    sendAt: string,
    attachedImage?: string,
    authorId: number,
    chatGroupId: number
}