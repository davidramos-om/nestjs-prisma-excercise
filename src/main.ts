import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { PrismaService } from 'src/prisma/prisma.service';
import { AppModule } from './app.module';

async function bootstrap() {

  const port = Number(process.env.PORT || 6001);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: port,
      }
    },
  );

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen();

  Logger.log('\n\nMicroservice is listening on port: ' + port, 'Bootstrap');
}

bootstrap();