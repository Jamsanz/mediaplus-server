import { Document } from 'mongoose';
import { IPost } from '@interfaces/posts.interface';
declare const postModel: import("mongoose").Model<IPost & Document<any, any, any>, {}, {}>;
export default postModel;
