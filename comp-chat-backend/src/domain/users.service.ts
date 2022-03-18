import { IUsersRepository } from './borders/usersRepository.interface';
import { User } from '../core/user.entity';

export class UsersService {
  private userRepo: IUsersRepository;

  constructor(userRepository: IUsersRepository) {
    this.userRepo = userRepository;
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.create(name, email, password);
  }

  login(email: string, password: string) {
    return this.userRepo.login(email, password);
  }

  getAllFromInput(input: string) {
    return this.userRepo.getAllFromInput(input);
  }

  addFriend(uuid: string, name: string) {
    return this.userRepo.addFriend(uuid, name);
  }
}
