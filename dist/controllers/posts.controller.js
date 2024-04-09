"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const posts_service_1 = (0, tslib_1.__importDefault)(require("../services/posts.service"));
class PostsController {
    constructor() {
        this.postsService = new posts_service_1.default();
        this.getPosts = async (req, res, next) => {
            try {
                const findAllPostsData = await this.postsService.findAllPosts();
                res.status(200).json({ Posts: findAllPostsData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getPostById = async (req, res, next) => {
            try {
                const PostId = req.params.id;
                const findOnePostData = await this.postsService.findPostById(PostId);
                res.status(200).json({ data: findOnePostData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createPost = async (req, res, next) => {
            try {
                const PostData = req.body;
                const createPostData = await this.postsService.createPost(PostData);
                res.status(201).json({ data: createPostData, message: 'Post Created Successfully' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updatePost = async (req, res, next) => {
            try {
                const PostId = req.params.id;
                const PostData = req.body;
                const updatePostData = await this.postsService.updatePost(PostId, PostData);
                res.status(200).json({ data: updatePostData, message: 'Post updated successfully' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deletePost = async (req, res, next) => {
            try {
                const PostId = req.params.id;
                const deletePostData = await this.postsService.deletePost(PostId);
                res.status(200).json({ data: deletePostData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = PostsController;
//# sourceMappingURL=posts.controller.js.map