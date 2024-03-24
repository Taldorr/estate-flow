import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ContactCreateDto } from './contact.create.dto';

export class CompanyCreateDto extends ContactCreateDto {
  @IsString()
  @ApiProperty()
  readonly name: string;
}
