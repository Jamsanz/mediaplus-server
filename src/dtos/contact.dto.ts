import { IsDate, IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public phone: string;

  @IsString()
  public status: string;

  @IsString()
  public message: string;

  @IsString()
  public service: string;

  @IsString()
  public updatedAt?: Date | string;

  @IsString()
  public createdAt?: Date | string;

}
