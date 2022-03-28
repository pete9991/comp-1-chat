import { Connection } from 'mongoose';
import { ProfileSchema } from './profileSchema';

export const ProfileProvider = [
  {
    provide: 'PROFILE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Profile', ProfileSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
