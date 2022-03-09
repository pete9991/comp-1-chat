import { Room } from '../../core/room.entity';

export interface IRoomsRepository {
  create(name: string): Promise<Room>;
}
