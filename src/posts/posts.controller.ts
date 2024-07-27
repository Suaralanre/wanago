import express, {Request, Response} from 'express';
import Post from './posts.interface';


class PostController{
    public path = '/posts';
    public router = express.Router();

    private posts: Post[] = [
        {
            author: "Marcin",
            content: "Dolor isit amet",
            title: "Lorem ipsum dolor sit amet"
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }

    getAllPosts = (req: Request, res: Response) => {
        res.send(this.posts);
    }

    createAPost = (req: Request, res: Response) => {
        const post: Post = req.body;
        this.posts.push(post);
        res.send(post);
    }
};

export default PostController;