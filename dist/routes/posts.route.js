"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const posts_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/posts.controller"));
class PostsRoute {
    constructor() {
        this.path = '/post';
        this.router = (0, express_1.Router)();
        this.PostsController = new posts_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.PostsController.getPosts);
        this.router.get(`${this.path}/:id`, this.PostsController.getPostById);
        this.router.post(`${this.path}`, this.PostsController.createPost);
        this.router.put(`${this.path}/:id`, this.PostsController.updatePost);
        this.router.delete(`${this.path}/:id`, this.PostsController.deletePost);
    }
}
exports.default = PostsRoute;
//# sourceMappingURL=posts.route.js.map