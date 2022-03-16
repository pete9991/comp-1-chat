import http from "./http.client";
import type { FriendRequest } from "@/models/FriendRequest";
import type { Friend } from "@/models/Friend";

export class FriendRequestService {
    async sendFriendRequest(
        sentUserUuid: string,
        sentUserName: string,
        receivedUserUuid: string,
        isAccepted: boolean
    ): Promise<FriendRequest> {
        const res = await http.post<FriendRequest>("/friend-requests", {
            sentUserUuid: sentUserUuid,
            sentUserName: sentUserName,
            receivedUserUuid: receivedUserUuid,
            isAccepted: isAccepted,
        });
        return res.data;
    }

    async getFriendRequests(receivedUserUuid: string): Promise<FriendRequest[]> {
        const res = await http.get<FriendRequest[]>(
            "/friend-requests/" + receivedUserUuid
        );
        return res.data;
    }

    async addFriend(uuid: string, name: string): Promise<Friend> {
        const res = await http.post<Friend>("/users/addFriend", {
            uuid: uuid,
            name: name,
        });
        return res.data;
    }

    async deleteFriendRequest(uuid: string) {
        return http.delete("/friend-requests/" + uuid);
    }
}