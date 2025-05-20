import { Timestamp } from "firebase/firestore";
import { Message } from "./message";
import { User } from "./user";

export interface Chat {
  id: string;
  type: ChatType;
  projectId: string;
  userIds: string[];
  name?: string;
  imageUrl?: string;
  lastMessages: string[];
  typingUsers: string[];
  createdAt: Timestamp;
  updatedAt: number;
  messages: Message[];
  members: User[];
  unReadCounts: {
    [key: string]: number;
  };
  unReadCount: number;
}

export enum ChatType {
  direct = "direct",
  group = "group",
}
