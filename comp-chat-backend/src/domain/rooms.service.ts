import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../rooms/dto/create-room.dto';
import { Room } from '../core/room.entity';
import { IRoomsRepository } from './borders/roomRepository.interface';

@Injectable()
export class RoomsService {
  private roomRepo: IRoomsRepository;

  constructor(roomRepository: IRoomsRepository) {
    this.roomRepo = roomRepository;
  }

  create(name: string): Promise<Room> {
    return this.roomRepo.create(name);
  }
}
