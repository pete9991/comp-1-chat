export interface FriendRequest {
    uuid: string;
    sentUserUuid: string;
    sentUserName: string;
    receivedUserUuid: string;
    isAccepted: boolean;
}