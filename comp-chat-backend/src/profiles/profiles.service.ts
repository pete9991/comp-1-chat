import { Inject, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Model } from 'mongoose';
import { Profile } from '../core/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(@Inject('PROFILE_MODEL') private profileModel: Model<Profile>) {}
  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = new this.profileModel(createProfileDto);
    return profile.save();
  }

  findAll() {
    return this.profileModel.find().exec();
  }

  getInfo(search: string) {
    return this.profileModel.findOne({ name: search }).exec();
  }

  addInterest(username: string, interest: string) {
    return this.profileModel.findOneAndUpdate(
      { name: username },
      { $push: { interests: interest } },
    );
  }

  getByGender(gender: string): Promise<Profile[]> {
    return this.profileModel.find({ gender: gender }).exec();
  }
}
