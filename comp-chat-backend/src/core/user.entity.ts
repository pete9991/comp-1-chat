import { Room } from './room.entity';

export class User {
  uuid: string;
  name: string;
  email: string;
  password: string;
  rooms: Room[] | null;
  friends: string;
}
