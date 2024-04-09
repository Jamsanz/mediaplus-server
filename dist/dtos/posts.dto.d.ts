import { author } from '..//interfaces/author.interface';
import { Iimg } from '..//interfaces/image.interface';
import { resource } from '..//interfaces/resource.interface';
export declare class PostsDto {
    title: string;
    body: string;
    image: Iimg;
    author: author;
    resource: resource;
}
