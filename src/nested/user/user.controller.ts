import { Body, Controller, Post } from '@nestjs/common';
import { UserModelEntity } from './user-model.entity';
import { UserService } from './user.service';

@Controller('user-model')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async saveUser(@Body() user: UserModelEntity) {
    return await this.userService.saveUser(user);
  }
}
