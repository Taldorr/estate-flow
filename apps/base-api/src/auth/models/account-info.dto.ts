import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AccountInfoDto {
  @IsString()
  @ApiProperty()
  readonly id: string;
}
