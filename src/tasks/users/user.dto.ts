import { Optional } from '@nestjs/common';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Optional()
  userId?: string;

  constructor(override: UserDto) {
    Object.assign(this, override);
  }
}
