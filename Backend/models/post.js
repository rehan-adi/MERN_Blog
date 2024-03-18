import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
     title: {
        require : true,
        type: String,
     },
     content: {
        require : true,
        type: String,
     },
     author: {
        require : true,
        type: String,
     },
     createdAt: {
        type: Date,
        default: Date.now
    }
});


export const postModel = mongoose.model("postModel", postSchema);