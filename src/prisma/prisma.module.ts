import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
// Change for commit 11 on 10/07/2025 02:44:54
// Change for commit 25 on 09/21/2025 16:52:54
// Change for commit 49 on 10/06/2025 22:56:54
