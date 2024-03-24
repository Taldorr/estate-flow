import { IsDate, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { CompanyDto } from './company.dto';
import { PersonDto } from './person.dto';

export class ContactDto {
  @IsString()
  @ApiProperty()
  readonly id: string;

  readonly person?: PersonDto;

  readonly company?: CompanyDto;

  @IsString()
  @ApiProperty({ example: 'test@estate-flow.com', required: false })
  readonly email: string;

  @IsString()
  @ApiProperty({ example: '0123456789', required: false })
  readonly phone?: string;

  @IsDate()
  @ApiProperty({ example: '2021-01-01T00:00:00.000Z' })
  readonly createdAt: Date;

  @IsDate()
  @ApiProperty({ example: '2021-01-01T00:00:00.000Z' })
  readonly updatedAt: Date;
}
