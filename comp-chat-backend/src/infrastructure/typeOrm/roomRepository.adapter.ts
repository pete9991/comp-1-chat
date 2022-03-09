import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../domain/borders/usersRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../core/user.entity';
import { UserSchema } from './user.schema';
import { IRoomsRepository } from '../../domain/borders/roomRepository.interface';
import { Room } from '../../core/room.entity';
import { RoomSchema } from './room.schema';

@Injectable()
export class RoomRepositoryAdapter implements IRoomsRepository {
  private readonly roomRepo: Repository<Room>;

  constructor(private readonly em: EntityManager) {
    this.roomRepo = em.getRepository(RoomSchema);
  }

  create(name: string): Promise<Room> {
    return this.roomRepo.save({ name: name });
  }
}
