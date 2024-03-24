import { IsOptional, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export abstract class ContactCreateDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'test@test.com', required: false })
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '0987654321', required: false })
  phone?: string;
}
