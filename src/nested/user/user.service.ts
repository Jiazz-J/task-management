import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModelEntity } from './user-model.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModelEntity)
    private readonly userRepo: Repository<UserModelEntity>,
  ) {}

  public async saveUser(userModel: UserModelEntity): Promise<UserModelEntity> {
    const user = await this.userRepo.save(userModel);
    return await this.userRepo.findOne(user.id);
  }
}
