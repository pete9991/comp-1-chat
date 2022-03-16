import { defineStore } from "pinia";
import type { FriendRequest } from "@/models/FriendRequest";
import { FriendRequestService } from "@/services/friendRequest.service";

const friendRequestService: FriendRequestService = new FriendRequestService();

export const FriendRequestStore = defineStore({
    id: "friendRequestStore",
    state: () => ({
        friendRequests: {} as FriendRequest[],
    }),
    getters: {
        friendRequestsFromUser: (state) => {
            if (state.friendRequests != undefined) return state.friendRequests;
            else return null;
        },
    },
    actions: {
        getFriendRequests(receivedUserUuid: string) {
            friendRequestService
                .getFriendRequests(receivedUserUuid)
                .then((fq) => (this.friendRequests = fq));
        },
    },
});