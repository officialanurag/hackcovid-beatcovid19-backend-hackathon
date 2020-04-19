import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import configuration from './config/config';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true
  }), HttpModule.register({
    timeout: 15000,
    maxRedirects: 5
  })],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
