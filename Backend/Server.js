import Express from "express";
import mongoose from "mongoose";
import app from "./routes/Post.js"
import authApp from './routes/authRoute.js'
import cors from 'cors'

const Server = Express();
const port = 3000;

const uri = 'mongodb+srv://Blog_Data:rehan12345@rehan.cycatda.mongodb.net/?retryWrites=true&w=majority&appName=Rehan';

Server.use(cors());

mongoose.connect(uri)
.then(() => {
    console.log('Db connected')
})
.catch((err) => {
    console.error("Error connecting to database:", err);
});

Server.use(Express.json());

Server.get('/', (req, res) => {
    res.send('Hello');
});

Server.use('/api/post', app);

Server.use('/register', authApp);

Server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
