import { Room } from '../../core/room.entity';
import { CreateRoomDto } from '../../rooms/dto/create-room.dto';

export interface IRoomsRepository {
  create(room: CreateRoomDto): Promise<Room>;
}
