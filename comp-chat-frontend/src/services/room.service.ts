import http from "./http.client";
import type { Room } from "@/models/Room";
import { UserStore } from "@/stores/user.store";
import { ChatStore } from "@/stores/chat.store";

export class RoomService {
  readonly userStore = UserStore();
  readonly chatStore = ChatStore();
  async createRoom(name: string): Promise<Room> {
    if (this.userStore.userName.length > 0) {
      const res = await http.post<Room>("/rooms", {
        name: name,
        username: this.userStore.userName,
      });
      if (res.data) {
        this.chatStore.setRoom(res.data.name);
      }
      return res.data;
    } else {
      throw new Error("you must be logged in");
    }
  }
}
