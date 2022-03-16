import { Controller, Post, Body, Inject } from '@nestjs/common';
import { RoomsService } from '../domain/rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from '../core/room.entity';

@Controller('rooms')
export class RoomsController {
  constructor(
    @Inject('RoomService') private readonly roomsService: RoomsService,
  ) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto);
  }
}
