import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import Redis from 'ioredis';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    @Inject('REDIS_CLIENT') private redisClient: Redis,
  ) {}

  async getUser(id: number) {
    const cached = await this.redisClient.get(`user:${id}`);
    if (cached) return JSON.parse(cached);
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (user) await this.redisClient.set(`user:${id}`, JSON.stringify(user), 'EX', 60);
    return user;
  }

  async createUser(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: { ...dto, password: hashedPassword },
    });
    await this.redisClient.set(`user:${user.id}`, JSON.stringify(user), 'EX', 60);
    return user;
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    if (dto.password) dto.password = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.update({ where: { id }, data: dto });
    await this.redisClient.del(`user:${id}`);
    return user;
  }

  async deleteUser(id: number) {
    await this.redisClient.del(`user:${id}`);
    return this.prisma.user.delete({ where: { id } });
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
// Change for commit 9 on 10/10/2025 10:54:54
// Change for commit 14 on 10/24/2025 11:59:54
// Change for commit 21 on 10/15/2025 17:08:54
// Change for commit 27 on 09/15/2025 21:40:54
// Change for commit 36 on 10/13/2025 16:19:54
// Commit 5 - return { status: 'ok' };
// Commit 22 - await this.prisma.course.create({ data });
// Commit 29 - return userDto;
// Commit 31 - return userDto;
