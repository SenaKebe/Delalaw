import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'apps/libs/prisma/src/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService], // Add PrismaService to providers
})
export class AuthModule {}
