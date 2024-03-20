import Express from "express";
import mongoose from "mongoose";
import app from "./routes/Post.js"
import authRouter from './routes/authRoute.js'
import cors from 'cors'

const Server = Express();
const port = 3000;

const uri = 'mongodb+srv://Blog_Data:rehan12345@rehan.cycatda.mongodb.net/?retryWrites=true&w=majority&appName=Rehan';

Server.use(cors());
Server.use(Express.json());

mongoose.connect(uri)
.then(() => {
    console.log('Db connected')
})
.catch((err) => {
    console.error("Error connecting to database:", err);
});


Server.get('/', (req, res) => {
    res.send('Hello');
});

Server.use('/api/post', app);
Server.use('/', authRouter)

Server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
