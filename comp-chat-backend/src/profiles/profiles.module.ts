import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { MongoDbModule } from '../infrastructure/mongoDB/mongoDb.module';
import { ProfileProvider } from '../infrastructure/mongoDB/profile.provider';

@Module({
  imports: [MongoDbModule],
  controllers: [ProfilesController],
  providers: [ProfilesService, ...ProfileProvider],
})
export class ProfilesModule {}
