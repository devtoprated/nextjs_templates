import { Timestamp } from "firebase/firestore";
import { User } from "./user";

export interface Reaction {
  emoji: string;
  emojiName: string;
  userIds: string[];
}

export interface MessageMetadata {
  reactions: Reaction[];
}

export interface Message {
  id: string;
  authorId: string;
  createdAt: Timestamp;
  updatedAt: number;
  seenBy: [string];
  status: MessageStatus;
  type: MessageType;
  text?: string;
  html?: string;
  // if type not text
  uri?: string;
  size?: number;
  name?: string;

  // additional ui fields
  sender?: User;
  me?: boolean;
  time?: string;
  image?: string;
  metadata?: MessageMetadata;
}

export enum MessageType {
  audio = "audio",
  file = "file",
  image = "image",
  text = "text",
}

export enum MessageStatus {
  delivered = "delivered",
  error = "error",
  seen = "seen",
  sending = "sending",
  sent = "sent",
}
