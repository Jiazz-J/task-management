import { Optional } from '@nestjs/common';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class CommentDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  constructor(override: CommentDto) {
    Object.assign(this, override);
  }
}
