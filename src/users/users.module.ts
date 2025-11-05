import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [PrismaModule, RedisModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
// Change for commit 2 on 09/28/2025 11:11:54
// Change for commit 10 on 10/16/2025 06:46:54
// Change for commit 22 on 10/27/2025 05:03:54
// Change for commit 40 on 11/05/2025 14:46:54
