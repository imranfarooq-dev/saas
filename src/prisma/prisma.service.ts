import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
// Change for commit 3 on 09/21/2025 09:18:54
// Change for commit 5 on 09/30/2025 09:53:54
// Change for commit 6 on 11/03/2025 19:18:54
// Change for commit 15 on 09/13/2025 10:24:54
// Change for commit 23 on 09/13/2025 03:06:54
// Change for commit 33 on 09/27/2025 13:32:54
// Change for commit 43 on 10/21/2025 10:21:54
// Commit 15 - next();
