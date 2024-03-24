// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import jwt from 'jsonwebtoken';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// /**
//  * This interceptor is used to add the user and team to the request object.
//  * req['account']
//  * req['customer'] OR req['member']
//  * req['team']
//  */
// @Injectable()
// export class AccountInfoInterceptor implements NestInterceptor {
//   constructor(private readonly authService: AuthService) {}
//   async intercept(
//     context: ExecutionContext,
//     next: CallHandler
//   ): Promise<Observable<any>> {
//     const req = context.switchToHttp().getRequest();
//     const authorizationHeader = req.headers['authorization'];
//     const token = authorizationHeader.split(' ')[1];
//     const decodedToken = jwt.decode(token);

//     const sub = decodedToken['sub'] as string;
//     // find the account by the sub and add it to the request object
//     const account = (await this.authService.findAccountBySub(sub)) as any;
//     if (!account) {
//       throw new Error('Account not found - SUB: ' + sub);
//     }
//     if (account.customer) {
//       req['customer'] = account.customer;
//     } else if (account.member) {
//       req['member'] = account.member;
//     }

//     if (account.customer?.tenant.team) {
//       req['team'] = account.customer.tenant.team;
//     } else if (account.member?.team) {
//       req['team'] = account.member.team;
//     }
//     req['account'] = account;
//     return next.handle();
//   }
// }
