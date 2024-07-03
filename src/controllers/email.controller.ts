import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from '../services/email.service';
import { MessageDto } from 'src/dtos/message.dto';
import { ResponseProps } from 'src/interfaces/response';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  async sendEmail(@Body() message: MessageDto): Promise<ResponseProps> {
    return await this.emailService.sendEmail(message);
  }
}
