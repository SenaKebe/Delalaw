import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'apps/libs/prisma/src/prisma.service';
import { CreateUserDto } from './dto/register.dto';
import { hashPassword } from 'apps/libs/utils/src/hash.util';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // Register user
  async register(dto: CreateUserDto) {
    const { email, password, name } = dto;

    // Check if user already exists
    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new ConflictException('User already exists with this email.');
    }

    const hashedPassword = await hashPassword(password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          phoneNumber: '',
          userType: 'normal',
          userStatus: 'active',
        },
      });

      return user;
    } catch (error) {
      throw new InternalServerErrorException(console.log(error));
    }
  }
}
