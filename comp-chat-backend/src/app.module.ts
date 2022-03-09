import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './rooms/rooms.module';
import { ChatsModule } from './chats/chats.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
