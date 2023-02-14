import { NextFunction, Request, Response } from 'express';
import PostsService from '@services/posts.service';
declare class PostsController {
    postsService: PostsService;
    getPosts: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPostById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createPost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updatePost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deletePost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default PostsController;
