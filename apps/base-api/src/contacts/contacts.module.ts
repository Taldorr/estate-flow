import { Module } from '@nestjs/common';
import { UtilModule } from '../util/util.module';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  imports: [UtilModule],
  providers: [ContactsService],
  controllers: [ContactsController],
  exports: [],
})
export class ContactsModule {}
