/// <reference types="mongoose" />
import { PostsDto } from '../dtos/posts.dto';
import { IPost } from '../interfaces/posts.interface';
declare class PostsService {
    Posts: import("mongoose").Model<IPost & import("mongoose").Document<any, any, any>, {}, {}>;
    findAllPosts(): Promise<IPost[]>;
    findPostById(PostId: string): Promise<IPost>;
    createPost(PostData: PostsDto): Promise<IPost>;
    updatePost(PostId: string, PostData: PostsDto): Promise<IPost>;
    deletePost(PostId: string): Promise<IPost>;
}
export default PostsService;
