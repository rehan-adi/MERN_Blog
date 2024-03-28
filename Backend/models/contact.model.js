import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const contactModel = mongoose.model('contactModel', contactSchema);
export default contactModel;
