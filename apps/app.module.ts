import { Module } from '@nestjs/common';
import { AuthModule } from './auth/src/auth.module';
import { PrismaModule } from 'apps/libs/prisma/src/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
})
export class AppModule {}
