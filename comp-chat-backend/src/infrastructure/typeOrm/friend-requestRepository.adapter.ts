﻿import { IFriendRequestRepository } from '../../domain/borders/friend-requestRepository.interface';
import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { FriendRequestSchema} from "./friend-request.scema";
import { FriendRequest } from '../../core/friend-request.entity';

@Injectable()
export class FriendRequestRepositoryAdapter
    implements IFriendRequestRepository
{
    private readonly friendRequestRepo: Repository<FriendRequest>;

    constructor(private readonly em: EntityManager) {
        this.friendRequestRepo = em.getRepository(FriendRequestSchema);
    }

    create(
        senderusername,
        recieverusername
    ): Promise<FriendRequest> {
        return this.friendRequestRepo.save({
            senderusername,
            recieverusername
        });
    }

    getFriendRequests(receivedUserUuid: string): Promise<FriendRequest[]> {
        return this.friendRequestRepo.find({
            where: { receivedUserUuid: receivedUserUuid },
        });
    }

    delete(uuid: string) {
        return this.friendRequestRepo.delete(uuid);
    }
}