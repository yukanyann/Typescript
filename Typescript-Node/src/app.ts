import express { Request,Response,NextFunction } from 'express';
interface MessageRequest extends Request {
    body: {
        message: string;
    }
}
const app = express();
app.use(express.json());
app.use('/', (req,res,next)=> {
    console.log('hello!');
    throw new Error()
    next();
})

app.post('/', (req:MessageRequest,res,next)=> {
    console.log(req.body);
    res.send('<h1> get ${req/body.message}</h1>');
})
app.use((err:Error,req:Request,next:NextFunction)=>{
    next();
})
app.listen(3000);