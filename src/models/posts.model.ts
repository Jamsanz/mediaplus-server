import { model, Schema, Document } from 'mongoose';
import { IPost } from '@interfaces/posts.interface';

const postSchema: Schema = new Schema({
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

const postModel = model<IPost & Document>('Post', postSchema);

export default postModel;
