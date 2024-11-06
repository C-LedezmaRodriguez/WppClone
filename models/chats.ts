export interface Message {
    createdAt: number;
    message: string;
  }
  
  export interface ChatDetail {
    id: string;
    lastName: string;
    name: string;
    type: string;
    messages: Message[];
  }
  
  export interface Chat {
    id: string;
    chats: Record<string, ChatDetail>;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
  }
  