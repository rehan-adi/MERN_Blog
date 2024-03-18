import  Express  from "express";
import post from "../models/post"

const app = Express();

app.post('/api/post', async (req, res) => {
    try {

        const { title, content, author} = req.body;

        const newPost = new post ({
            title,
            content, 
            author,
        });

        const savePost = await newPost.save();
        res.status(200).json(savePost);

        
    } catch (error) {
        console.error("Error", error);
    }
})