export interface chatProps {
  chatMessage?: string;
  userId?: string;
  roomKey?: string | string[] | undefined;
}

export interface ChatListProps {
  registerDate?: string;
  id?: number;
  roomKey: string;
  uuid: string;
  message: string;
  userId: string;
}
