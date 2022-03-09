import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from '../domain/users.service';
import { UserRepositoryAdapter } from '../infrastructure/typeOrm/userRepository.adapter';
import { IUsersRepository } from '../domain/borders/usersRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeOrm/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepo',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepo'],
      provide: 'UserService',
      useFactory: (userRepository: IUsersRepository) =>
        new UsersService(userRepository),
    },
  ],
})
export class UsersModule {}
