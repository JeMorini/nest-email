import { Controller, Post } from '@nestjs/common';
import { EmailService } from '../services/email.service';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  async sendEmail(): Promise<string> {
    return await this.emailService.sendEmail();
  }
}
