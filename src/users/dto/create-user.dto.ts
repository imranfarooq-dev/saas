import { IsString, IsEmail, Length, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString() @Length(1, 50) name: string;
  @IsEmail() email: string;
  @IsString() @Length(6, 128) password: string;
  @IsEnum(Role) role: Role;
}
