import { FriendRequest } from '../../core/friend-request.entity';

export interface IFriendRequestRepository {
    create(
        senderusername,
        recieverusername
    ): Promise<FriendRequest>;

    getFriendRequests(receivedUserUuid: string): Promise<FriendRequest[]>;

    delete(uuid: string);
}