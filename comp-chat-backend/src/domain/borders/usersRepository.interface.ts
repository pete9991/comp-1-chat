import { User } from '../../core/user.entity';

export interface IUsersRepository {
  create(name: string, email: string, password: string): Promise<User>;

  login(email: string, password: string): Promise<User>;
}
