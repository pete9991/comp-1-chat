import { IUsersRepository } from './borders/usersRepository.interface';
import { User } from '../core/user.entity';
import { FriendRequestDto } from '../users/dto/friend-request.dto';

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

  async getAllFromInput(input: string) {
    const allUsers = await this.userRepo.getAllFromInput();
    const result = [];
    allUsers.forEach(function (user) {
      if (user.name.includes(input) == true) {
        result.push(user);
      }
    });
    if (input == '') {
      result.push(allUsers);
    }
    return result;
  }

  addFriend(friendrequestdto: FriendRequestDto) {
    return this.userRepo.addFriend(friendrequestdto);
  }
}
