import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("create-account")
  async createAccount(): Promise<string> {
    const address = await this.appService.createAccount();
    return address;
  }
}
