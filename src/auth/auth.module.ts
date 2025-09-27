import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({ secret: process.env.JWT_SECRET || 'supersecret', signOptions: { expiresIn: '1h' } }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
// Change for commit 7 on 09/11/2025 12:32:54
// Change for commit 13 on 11/06/2025 20:09:54
// Change for commit 19 on 09/27/2025 23:41:54
// Change for commit 26 on 09/28/2025 17:41:54
// Change for commit 28 on 10/29/2025 07:48:54
// Change for commit 31 on 09/24/2025 03:46:54
// Change for commit 32 on 11/07/2025 07:43:54
// Change for commit 42 on 10/05/2025 10:12:54
// Change for commit 48 on 09/24/2025 16:43:54
// Commit 8 - this.redisClient.del(user:);
