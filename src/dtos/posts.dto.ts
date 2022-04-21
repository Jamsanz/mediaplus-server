import { author } from '@/interfaces/author.interface';
import { Iimg } from '@/interfaces/image.interface';
import { resource } from '@/interfaces/resource.interface';
import { IsEmail, IsString, IsObject } from 'class-validator';

export class PostsDto {
  @IsEmail()
  public title: string;

  @IsString()
  public body: string;

  @IsObject()
  public image: Iimg;

  @IsString()
  public author: author;

  @IsString()
  public resource: resource;
}
