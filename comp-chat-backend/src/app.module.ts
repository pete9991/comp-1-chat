import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './rooms/rooms.module';
import { ChatsModule } from './chats/chats.module';
import { FriendRequestsModule } from './friend-requests/friend-requests.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database/copm.db',
      autoLoadEntities: true,
      type: 'sqlite',
      synchronize: true,
    }),
    UsersModule,
    RoomsModule,
    ChatsModule,
    FriendRequestsModule,
    ProfilesModule,
    MatchesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
