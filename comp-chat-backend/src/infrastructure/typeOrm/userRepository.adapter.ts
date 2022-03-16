import { IUsersRepository } from '../../domain/borders/usersRepository.interface';
import { User } from '../../core/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { UserSchema } from './user.schema';
import { Injectable } from '@nestjs/common';


@Injectable()
export class UserRepositoryAdapter implements IUsersRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.save({ name: name, email: email, password: password });
  }

  login(email: string, password: string): Promise<User> {
    return this.userRepo.findOne({ email: email, password: password });
  }

  getAllFromInput(input: string): Promise<User[]> {
    return this.userRepo.find(undefined);
  }
}
