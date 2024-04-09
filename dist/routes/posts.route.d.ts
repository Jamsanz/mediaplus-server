import PostsController from '../controllers/posts.controller';
import { Routes } from '../interfaces/routes.interface';
declare class PostsRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    PostsController: PostsController;
    constructor();
    private initializeRoutes;
}
export default PostsRoute;
