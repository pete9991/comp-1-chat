import type { Room } from "@/models/Room";

export interface User {
  uuid: string;
  name: string;
  email: string;
  password: string;
  rooms: Room[] | null;
  //friends: User[] | null;
}
