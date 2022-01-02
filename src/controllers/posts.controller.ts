import { NextFunction, Request, Response } from 'express';
import { PostsDto } from '@dtos/posts.dto';
import { IPost } from '@interfaces/posts.interface';
import PostsService from '@services/posts.service';

class PostsController {
    public postsService = new PostsService();

    public getPosts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllPostsData: IPost[] = await this.postsService.findAllPosts();

            res.status(200).json({ Posts: findAllPostsData });
        } catch (error) {
            next(error);
        }
    };

    public getPostById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const PostId: string = req.params.id;
            const findOnePostData: IPost = await this.postsService.findPostById(PostId);

            res.status(200).json({ data: findOnePostData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const PostData = req.body;
            const createPostData: IPost = await this.postsService.createPost(PostData);

            res.status(201).json({ data: createPostData, message: 'Post Created Successfully' });
        } catch (error) {
            next(error);
        }
    };

    public updatePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const PostId: string = req.params.id;
            const PostData: PostsDto = req.body;
            const updatePostData: IPost = await this.postsService.updatePost(PostId, PostData);
            res.status(200).json({ data: updatePostData, message: 'Post updated successfully' });
        } catch (error) {
            next(error);
        }
    };

    public deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const PostId: string = req.params.id;
            const deletePostData: IPost = await this.postsService.deletePost(PostId);

            res.status(200).json({ data: deletePostData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default PostsController;
