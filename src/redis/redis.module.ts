import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
// Change for commit 12 on 09/10/2025 21:16:54
// Change for commit 16 on 10/19/2025 23:40:54
