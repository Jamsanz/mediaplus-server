import { Iimg } from '@/interfaces/image.interface';
import { IsEmail, IsString, IsObject } from 'class-validator';

export class PostsDto {
    @IsEmail()
    public title: string;

    @IsString()
    public body: string;

    @IsObject()
    public image: Iimg

    @IsString()
    public authorName: string;

    @IsString()
    public authorImage: string;
}