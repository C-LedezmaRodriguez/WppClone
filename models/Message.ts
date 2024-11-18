export interface Message {
    createdAt: Date;
    message: string;
    isFavorite: boolean;
    sent: boolean;
    read: boolean;
    typeMessage: TypeMessage;
}

export enum TypeMessage {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    GIFT = 'GIFT',
    VIDEO = 'VIDEO',
}
