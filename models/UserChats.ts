import {Chat} from "@/models/Chat";

export interface UserChats {
    id: string;
    email: string;
    name: string;
    lastName: string;
    photoURL: string;
    chats: Chat[];
}
