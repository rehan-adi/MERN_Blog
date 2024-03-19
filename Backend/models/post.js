import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
     title: {
        required : true,
        type: String,
     },
     content: {
        required : true,
        type: String,
     },
     author: {
        required : true,
        type: String,
     },
     createdAt: {
        type: Date,
        default: Date.now
    }
});


const postModel = mongoose.model("postModel", postSchema);
export default postModel;