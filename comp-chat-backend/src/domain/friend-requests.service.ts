import { UpdateFriendRequestDto } from '../friend-requests/dto/update-friend-request.dto';
import { IFriendRequestRepository } from './borders/friend-requestRepository.interface';
import { FriendRequest } from '../core/friend-request.entity';

export class FriendRequestsService {
    private friendRequestRepo: IFriendRequestRepository;

    constructor(friendRequestRepository: IFriendRequestRepository) {
        this.friendRequestRepo = friendRequestRepository;
    }

    create(
        senderusername: string,
        recieverusername: string
    ): Promise<FriendRequest> {
        return this.friendRequestRepo.create(
            senderusername,
            recieverusername
        );
    }

    findAll() {
        return `This action returns all friendRequests`;
    }

    getFriendRequests(receivedUserUuid: string): Promise<FriendRequest[]> {
        return this.friendRequestRepo.getFriendRequests(receivedUserUuid);
    }

    update(id: number, updateFriendRequestDto: UpdateFriendRequestDto) {
        return `This action updates a #${id} friendRequest`;
    }

    delete(uuid: string) {
        return this.friendRequestRepo.delete(uuid);
    }
}