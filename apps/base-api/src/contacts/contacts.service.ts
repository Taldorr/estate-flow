import { Injectable } from '@nestjs/common';
import { ContactType } from '@prisma/client';
import { PrismaService } from '../util/prisma.service';
import { CompanyCreateDto } from './models/company.create.dto';
import { ContactDto } from './models/contact.dto';
import { PersonCreateDto } from './models/person.create.dto';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async createPerson(dto: PersonCreateDto): Promise<ContactDto> {
    const contact = await this.prisma.contact.create({
      data: {
        type: ContactType.PERSON,
        email: dto.email,
        phone: dto.phone,
        person: {
          create: {
            firstName: dto.firstName,
            lastName: dto.lastName,
          },
        },
      },
      include: {
        person: true,
      },
    });

    return <ContactDto>{
      id: contact.id,
      type: contact.type,
      email: contact.email,
      phone: contact.phone,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
      person: {
        id: contact.person.id,
        firstName: contact.person.firstName,
        lastName: contact.person.lastName,
      },
    };
  }
  async createCompany(dto: CompanyCreateDto): Promise<ContactDto> {
    const contact = await this.prisma.contact.create({
      data: {
        type: ContactType.COMPANY,
        email: dto.email,
        phone: dto.phone,
        company: {
          create: {
            name: dto.name,
          },
        },
      },
      include: {
        company: true,
      },
    });

    return <ContactDto>{
      id: contact.id,
      type: contact.type,
      email: contact.email,
      phone: contact.phone,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
      company: {
        id: contact.company.id,
        name: contact.company.name,
      },
    };
  }

  async getAll(): Promise<ContactDto[]> {
    const raws = await this.prisma.contact.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        person: true,
        company: true,
      },
    });

    return raws.map((raw) => {
      return <ContactDto>{
        id: raw.id,
        type: raw.type,
        email: raw.email,
        phone: raw.phone,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        person: raw.person
          ? {
              id: raw.person.id,
              firstName: raw.person.firstName,
              lastName: raw.person.lastName,
            }
          : null,
        company: raw.company
          ? {
              id: raw.company.id,
              name: raw.company.name,
            }
          : null,
      };
    });
  }

  async deleteById(id: string): Promise<void> {
    console.log('deleteById', id);
    await this.prisma.contact.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
    return;
  }
}
