import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { MessageDto } from 'src/dtos/message.dto';
import { ResponseProps } from 'src/interfaces/response';
import 'dotenv/config';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }
  async sendEmail(message: MessageDto): Promise<ResponseProps> {
    try {
      await sgMail.send(message);
    } catch (error) {
      return {
        status: 500,
        message: error.response.body.errors[0].message,
      };
    }
    return { status: 200, message: 'Email enviado!' };
  }
}
