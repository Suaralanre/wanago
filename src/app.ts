import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';


class App {
    public app: express.Application;
    public port: number;

    constructor(controllers, port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on ${this.port}`);
        });
    }

}



export default App;
