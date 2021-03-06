import { EntitySchema } from 'typeorm';
import { User } from '../../core/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
    },
  },
  relations: {
    rooms: {
      type: 'one-to-many',
      target: 'Room',
      nullable: true,
    },
    friends: {
      type: 'many-to-many',
      target: 'User',
      nullable: true,
    }
  },
});
