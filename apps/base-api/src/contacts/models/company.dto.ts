import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
  @IsString()
  @ApiProperty()
  readonly id: string;

  @IsString()
  @ApiProperty()
  readonly name: string;
}
