import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getData() {
    return this.appService.getData();
  }

  @Post('addUser')
  addUser(@Body() firstName: {firstName: string}, @Body() lastName: {lastName:string }, @Body() email: {email: string}) {

     return this.appService.addUser( firstName.firstName, lastName.lastName, email.email );
  }
}
