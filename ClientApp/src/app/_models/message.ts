export interface Message {
    id: number;
    senderId: number;
    recipientId: number;
    content: string;
    isRead: boolean;
    messageSent: Date;
    username: string;
    recipientKnownAs: string;
}
