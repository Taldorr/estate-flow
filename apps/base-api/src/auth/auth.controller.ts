// import {
//   Controller,
//   Get,
//   Req,
//   UseGuards,
//   UseInterceptors,
// } from '@nestjs/common';
// import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from './auth.guard';
// import { AccountInfoDto } from './models/account-info.dto';
// import { AccountInfoInterceptor } from './user-info.interceptor';

// @ApiTags('Auth')
// @Controller('auth')
// @UseGuards(AuthGuard)
// @UseInterceptors(AccountInfoInterceptor)
// export class AuthController {
//   constructor() {}

//   @Get()
//   @ApiOkResponse({ type: AccountInfoDto })
//   async infos(@Req() req: Request): Promise<AccountInfoDto> {
//     return <AccountInfoDto>{
//       id: req['account'].id,
//     };
//   }
// }
