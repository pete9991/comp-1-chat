import { Connection } from 'mongoose';
import { MatchSchema } from './matchSchema';

export const MatchProvider = [
  {
    provide: 'MATCH_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Match', MatchSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
