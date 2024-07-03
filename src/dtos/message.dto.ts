import { IsString, IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsNotEmpty()
  readonly from: string;
  readonly to: string;
  readonly bcc: Array<string>;
  readonly subject: string;
  readonly text: string;
  readonly html: string;
}
