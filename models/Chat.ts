import {Message} from "@/models/Message";

export interface Chat {
    userId: string;
    latName: string;
    name: string;
    photoUrl: string;
    email: string;
    typeChat: TypeChat;
    messages: Message[];
}

export enum TypeChat {
    INDIVIDUAL = 'INDIVIDUAL',
    GROUPS = 'GROUPS'
}
