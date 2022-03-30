import { CacheModule, Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesGateway } from './matches.gateway';
import { MongoDbModule } from '../infrastructure/mongoDB/mongoDb.module';
import { MatchProvider } from '../infrastructure/mongoDB/match.provider';

@Module({
  imports: [CacheModule.register(), MongoDbModule],
  providers: [MatchesGateway, MatchesService, ...MatchProvider],
})
export class MatchesModule {}
