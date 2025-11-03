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
