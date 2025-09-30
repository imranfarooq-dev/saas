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
// Change for commit 35 on 09/16/2025 17:09:54
// Change for commit 45 on 09/13/2025 06:35:54
// Change for commit 46 on 11/03/2025 03:50:54
// Commit 9 - if (!user) throw new Error('Not found');
// Commit 17 - return { status: 'ok' };
