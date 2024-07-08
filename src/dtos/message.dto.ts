import { IsString, IsNotEmpty, IsEmpty } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsNotEmpty()
  readonly from: string;
  readonly to: string;
  readonly subject: string;
  readonly text: string;
  @IsEmpty()
  readonly bcc: Array<string>;
  readonly html: string;
}
