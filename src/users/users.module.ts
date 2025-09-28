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
