// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   InternalServerErrorException,
//   Logger,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Request, Response } from 'express';
// import {
//   InvalidTokenError,
//   UnauthorizedError,
//   auth,
// } from 'express-oauth2-jwt-bearer';
// import { promisify } from 'util';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest<Request>();
//     const response = context.switchToHttp().getResponse<Response>();

//     const validateAccessToken = promisify(
//       auth({
//         audience: process.env.AUTH0_AUDIENCE,
//         issuerBaseURL: process.env.AUTH0_ISSUER_URL,
//       })
//     );

//     try {
//       await validateAccessToken(request, response);

//       return true;
//     } catch (error) {
//       if (error instanceof InvalidTokenError) {
//         Logger.warn(error.code, error.message, error.stack);
//         throw new UnauthorizedException('Bad credentials');
//       }

//       if (error instanceof UnauthorizedError) {
//         Logger.warn(error, error.message, error.stack);
//         throw new UnauthorizedException('Requires authentication');
//       }

//       throw new InternalServerErrorException();
//     }
//   }
// }
