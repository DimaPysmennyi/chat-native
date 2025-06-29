interface AttachedImage{
    id?: number,
    filename: string,
    file?: string,
    uploadedAt?: Date,
    messageId?: number
}

export interface IMessage{
    id?: number,
    content: string,
    sentAt: Date,
    attachedImage?: AttachedImage,
    authorId: number,
    chatGroupId: number
}