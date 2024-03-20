import mongoose from 'mongoose'

const userAuthSchema = mongoose.Schema({
    username: {
        type: String,
        required : true,
    },
    password: {
        type: Number,
        required : true,
    },
    email: {
        type: String,
        required : true,
        unique: true
    },

});

export const userAuthModel = mongoose.model('UserAuthModel', userAuthSchema);