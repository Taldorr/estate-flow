import { ContactType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const contact1 = await prisma.contact.create({
    data: {
      type: ContactType.PERSON,
      email: 'test@person.com',
      phone: '1234567890',
      person: {
        create: {
          firstName: 'John',
          lastName: 'Doe',
        },
      },
    },
  });

  const contact2 = await prisma.contact.create({
    data: {
      type: ContactType.COMPANY,
      email: 'test@company.com',
      phone: '0987654321',
      company: {
        create: {
          name: 'Company GmbH',
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
