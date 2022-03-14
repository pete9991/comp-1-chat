import http from "./http.client";
import type { Room } from "@/models/Room";

export class RoomService {
  async createRoom(name: string): Promise<Room> {
    const res = await http.post<Room>("/rooms", {
      name: name,
    });
    return res.data;
  }
}
