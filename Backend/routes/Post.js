import  Express  from "express";
import post from "../models/post.js"

const app = Express();
app.use(Express.json());

app.post('/api/post', async (req, res) => {
    try {

        const { title, content, author} = req.body;

        const newPost = new post ({
            title,
            content, 
            author,
        });

        const savePost = await newPost.save();
      return res.status(200).json(savePost);

        
    } catch (error) {
        console.error("Error", error);
    }
})


app.get('/api/allPost', async(req, res) => {
    try {
        
        const AllPost = await post.find();

        return req.status(200).json(AllPost);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve blog posts' });
    }
});


app.get('/api/singlepost:postId', async(req, res) => {

    try {

        const postid = req.params.postId;
        const singlePost = await post.findById(postid);

        if(!singlePost){
           return res.status(404).json({error: 'post not found'});
        }
        else{
           return res.status(200).json(singlePost);
        }

    } catch (error) {
        console.error('can not get post', error);
        res.status(500).json({ error: 'Failed to retrieve blog post' });
    }

});


app.put('/api/post:postId', async (req, res) => {
    try {

        const postId = req.params.postId;
        const {title, content, author} = req.body;

        if(!title || !content || !author){
            return res.status(400).json({ error: 'Title, content, and author are required for updating a blog post' });
        };

        const updateData = await post.findByIdAndUpdate(postId, { title, content, author }, { new: true });

        if(!updateData){
              return res.status(400).json({error: 'Blog post not found'});
        }
        else{
               return res.status(200).json( updateData, 'post update')
        }
        
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({error: 'Failed to update blog post'})
    }

});


app.delete('/api/deletepost:postId', async (req, res) => {

    const postId = req.params.postId;
    const deletePost = await post.findByIdAndDelete(postId);

    if(!deletePost){
        return res.status(404).json({error: 'Blog post not found'});
    }
    else{
        return res.status(200).json({message: 'Blog post delete'});
    }

})

export default app;