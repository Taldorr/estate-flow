import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger/dist/decorators';
import { ContactsService } from './contacts.service';
import { CompanyCreateDto } from './models/company.create.dto';
import { ContactDto } from './models/contact.dto';
import { PersonCreateDto } from './models/person.create.dto';

@ApiTags('Contacts')
@Controller('contacts')
// @UseGuards(AuthGuard)
// @UseInterceptors(AccountInfoInterceptor)
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiOkResponse({ type: ContactDto, isArray: true })
  async getAll(): Promise<ContactDto[]> {
    return await this.contactsService.getAll();
  }

  @Post('/person')
  @ApiCreatedResponse({
    description: 'The contact person has been successfully created.',
    type: ContactDto,
  })
  async createPerson(@Body() dto: PersonCreateDto): Promise<ContactDto> {
    return await this.contactsService.createPerson(dto);
  }

  @Post('/company')
  @ApiCreatedResponse({
    description: 'The contact company has been successfully created.',
    type: ContactDto,
  })
  async createCompany(@Body() dto: CompanyCreateDto): Promise<ContactDto> {
    return await this.contactsService.createCompany(dto);
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'The contact has been successfully deleted.' })
  async delete(@Param('id') id: string): Promise<void> {
    return await this.contactsService.deleteById(id);
  }
}
