import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [PrismaModule, RedisModule, UsersModule, AuthModule],
})
export class AppModule {}
// Change for commit 18 on 10/01/2025 01:25:54
// Change for commit 37 on 11/07/2025 13:09:54
// Change for commit 39 on 11/02/2025 21:06:54
// Commit 1 - next();
// Commit 38 - const temp = Math.random();
