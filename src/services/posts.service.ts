import { PostsDto } from '@dtos/posts.dto';
import { HttpException } from '@exceptions/HttpException';
import { IPost } from '@interfaces/posts.interface';
import PostModel from '@models/posts.model';
import { isEmpty } from '@utils/util';

class PostsService {
  public Posts = PostModel;

  public async findAllPosts(): Promise<IPost[]> {
    const Posts: IPost[] = await this.Posts.find();
    return Posts;
  }

  public async findPostById(PostId: string): Promise<IPost> {
    if (isEmpty(PostId)) throw new HttpException(400, 'No ID provided');

    const findPost: IPost = await this.Posts.findOne({ _id: PostId });
    if (!findPost) throw new HttpException(409, 'No Post');

    return findPost;
  }

  public async createPost(PostData: PostsDto): Promise<IPost> {
    if (isEmpty(PostData)) throw new HttpException(400, 'Please fill in all the required fields');

    const createPostData: IPost = await this.Posts.create({ ...PostData });

    return createPostData;
  }

  public async updatePost(PostId: string, PostData: PostsDto): Promise<IPost> {
    if (isEmpty(PostData)) throw new HttpException(400, 'Empty fields provided');

    const updatePostById: IPost = await this.Posts.findByIdAndUpdate(PostId, { $set: PostData });
    if (!updatePostById) throw new HttpException(409, 'Invalid record selection');

    return updatePostById;
  }

  public async deletePost(PostId: string): Promise<IPost> {
    const deletePostById: IPost = await this.Posts.findByIdAndDelete(PostId);
    if (!deletePostById) throw new HttpException(409, 'Invalid record deletion');

    return deletePostById;
  }
}

export default PostsService;
