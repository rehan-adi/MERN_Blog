import mongoose from 'mongoose'

const userAuthSchema = mongoose.Schema({
    username: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
        unique: true
    },

});

const userAuthModel = mongoose.model('UserAuthModel', userAuthSchema);
export default userAuthModel;