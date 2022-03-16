import { Controller, Post, Body, Inject, Get } from "@nestjs/common";
import { UsersService } from '../domain/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../core/user.entity';


@Controller('users')
export class UsersController {
  constructor(
    @Inject('UserService') private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('/login')
  login(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.login(createUserDto.email, createUserDto.password);
  }
  @Get()
  getAllUsers(@Body() input: string): Promise<User[]> {
    return this.usersService.getAllFromInput(input);
  }
}
