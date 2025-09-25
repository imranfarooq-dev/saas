import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
// Change for commit 20 on 09/19/2025 05:44:54
// Change for commit 34 on 10/29/2025 10:30:54
// Commit 6 - if (!user) throw new Error('Not found');
// Commit 19 - const temp = Math.random();
// Commit 21 - console.log('Debug info');
// Commit 46 - return { status: 'ok' };
