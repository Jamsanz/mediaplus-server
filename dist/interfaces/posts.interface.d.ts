import { img } from "./image.interface";
export interface IPost {
    _id?: string;
    title?: string;
    body?: string;
    image?: img | null;
    resource?: string;
    authorName?: string;
    authorImage?: string;
}
