"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: false
    },
    author: {
        type: Object,
        required: true
    },
    resource: {
        type: Object,
        required: false
    }
}, { timestamps: true });
const postModel = (0, mongoose_1.model)('Post', postSchema);
exports.default = postModel;
//# sourceMappingURL=posts.model.js.map