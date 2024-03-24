// import { Injectable } from '@nestjs/common';
// import { Account } from '@prisma/client';
// import { PrismaService } from '../util/services/prisma.service';

// @Injectable()
// export class AuthService {
//   constructor(private prisma: PrismaService) {}

//   // Used in the UserInfoInterceptor
//   async findAccountBySub(authId: string): Promise<Account | null> {
//     return this.prisma.account.findUnique({
//       where: {
//         authId: authId,
//       },
//       include: {
//         customer: {
//           include: {
//             tenant: {
//               include: {
//                 team: true,
//               },
//             },
//           },
//         },
//         member: {
//           include: {
//             team: true,
//           },
//         },
//       },
//     });
//   }
// }
