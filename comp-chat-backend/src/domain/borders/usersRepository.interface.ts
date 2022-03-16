import { User } from '../../core/user.entity';
import { UserListEntity } from '../../core/user-list.entity';

export interface IUsersRepository {

  create(name: string, email: string, password: string): Promise<User>;

  login(email: string, password: string): Promise<User>;

  getAllFromInput(input: string): Promise<User[]>;
}
