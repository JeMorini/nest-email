import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(): Promise<string> {
    const msg = {
      to: '',
      from: '', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    (async () => {
      try {
        await sgMail.send(msg);
        return 'Email enviado!';
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
        return 'Falha ao enviar email!';
      }
    })();
    return 'Email enviado!';
  }
}
