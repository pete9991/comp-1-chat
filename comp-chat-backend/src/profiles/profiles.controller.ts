import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  CacheInterceptor,
  Param,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Profile } from '../core/profile.entity';

@Controller('profiles')
@UseInterceptors(CacheInterceptor)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  findAll() {
    console.log('tester');
    return this.profilesService.findAll();
  }

  @Post('info')
  getInfo(@Body() cursedTransfer: CreateUserDto): Promise<Profile> {
    return this.profilesService.getInfo(cursedTransfer.name);
  }

  @Post('addInterest')
  addInterest(@Body() cursedTransfer: CreateUserDto) {
    return this.profilesService.addInterest(
      cursedTransfer.name,
      cursedTransfer.email,
    );
  }

  @Get(':gender')
  profilesByGender(@Param() params) {
    console.log('gotten by gender');
    console.log(params);
    return this.profilesService.getByGender(params.gender);
  }
}
