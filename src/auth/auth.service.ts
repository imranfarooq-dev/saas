import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(email: string, password: string) {
    const user = await this.usersService.validateUser(email, password);
    const payload = { sub: user.id, role: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }
}
// Change for commit 1 on 10/14/2025 21:29:54
// Change for commit 8 on 10/18/2025 07:11:54
// Change for commit 30 on 09/18/2025 15:12:54
