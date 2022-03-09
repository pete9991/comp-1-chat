import { Module } from '@nestjs/common';
import { RoomsService } from '../domain/rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomSchema } from '../infrastructure/typeOrm/room.schema';
import { RoomRepositoryAdapter } from '../infrastructure/typeOrm/roomRepository.adapter';
import { IRoomsRepository } from '../domain/borders/roomRepository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([RoomSchema])],
  controllers: [RoomsController],
  providers: [
    {
      provide: 'RoomRepo',
      useClass: RoomRepositoryAdapter,
    },
    {
      inject: ['RoomRepo'],
      provide: 'RoomService',
      useFactory: (RoomRepository: IRoomsRepository) =>
        new RoomsService(RoomRepository),
    },
  ],
})
export class RoomsModule {}
