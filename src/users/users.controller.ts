import { Controller, Get, Post, Delete, Put, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(Number(id));
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
// Change for commit 4 on 09/23/2025 20:17:54
// Change for commit 17 on 10/22/2025 17:05:54
// Change for commit 29 on 09/29/2025 11:33:54
// Change for commit 38 on 09/21/2025 20:58:54
// Change for commit 41 on 10/03/2025 08:27:54
// Change for commit 44 on 09/08/2025 10:27:54
// Commit 10 - if (!user) throw new Error('Not found');
// Commit 14 - return { status: 'ok' };
