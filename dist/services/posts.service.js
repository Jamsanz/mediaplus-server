"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@exceptions/HttpException");
const posts_model_1 = (0, tslib_1.__importDefault)(require("@models/posts.model"));
const util_1 = require("@utils/util");
class PostsService {
    constructor() {
        this.Posts = posts_model_1.default;
    }
    async findAllPosts() {
        const Posts = await this.Posts.find();
        return Posts;
    }
    async findPostById(PostId) {
        if ((0, util_1.isEmpty)(PostId))
            throw new HttpException_1.HttpException(400, 'No ID provided');
        const findPost = await this.Posts.findOne({ _id: PostId });
        if (!findPost)
            throw new HttpException_1.HttpException(409, 'No Post');
        return findPost;
    }
    async createPost(PostData) {
        if ((0, util_1.isEmpty)(PostData))
            throw new HttpException_1.HttpException(400, 'Please fill in all the required fields');
        const createPostData = await this.Posts.create(Object.assign({}, PostData));
        return createPostData;
    }
    async updatePost(PostId, PostData) {
        if ((0, util_1.isEmpty)(PostData))
            throw new HttpException_1.HttpException(400, 'Empty fields provided');
        const updatePostById = await this.Posts.findByIdAndUpdate(PostId, { $set: PostData });
        if (!updatePostById)
            throw new HttpException_1.HttpException(409, 'Invalid record selection');
        return updatePostById;
    }
    async deletePost(PostId) {
        const deletePostById = await this.Posts.findByIdAndDelete(PostId);
        if (!deletePostById)
            throw new HttpException_1.HttpException(409, 'Invalid record deletion');
        return deletePostById;
    }
}
exports.default = PostsService;
//# sourceMappingURL=posts.service.js.map