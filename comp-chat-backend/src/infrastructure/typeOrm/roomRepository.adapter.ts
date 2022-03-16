import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../domain/borders/usersRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../core/user.entity';
import { UserSchema } from './user.schema';
import { IRoomsRepository } from '../../domain/borders/roomRepository.interface';
import { Room } from '../../core/room.entity';
import { RoomSchema } from './room.schema';
import { CreateRoomDto } from '../../rooms/dto/create-room.dto';

@Injectable()
export class RoomRepositoryAdapter implements IRoomsRepository {
  private readonly roomRepo: Repository<Room>;
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.roomRepo = em.getRepository(RoomSchema);
    this.userRepo = em.getRepository(UserSchema);
  }

  async create(room: CreateRoomDto): Promise<Room> {
    const user = await this.userRepo.findOne({
      where: { name: room.username },
    });
    return this.roomRepo.save({ name: room.name, user: user });
  }
}
